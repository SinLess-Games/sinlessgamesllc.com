// worker.test.ts
import { describe, it, expect } from "vitest"
import app from "./index" // adjust the import if your worker file is in a different location
import { Context } from "hono"

// Define a fake R2 object type for testing
interface FakeR2Object {
  body: string
  httpEtag: string
  writeHttpMetadata(headers: Headers): void
}

// Create a fake R2Bucket class
class FakeR2Bucket {
  private store: Record<string, FakeR2Object>
  constructor(store: Record<string, FakeR2Object> = {}) {
    this.store = store
  }
  async get(key: string): Promise<FakeR2Object | null> {
    return this.store[key] || null
  }
}

// Create a fake R2 object
const fakeR2Object: FakeR2Object = {
  body: "Hello from bucket",
  httpEtag: "fake-etag",
  writeHttpMetadata(headers: Headers) {
    headers.set("Content-Type", "text/plain")
  }
}

// Create a fake environment object implementing our CFEnv interface
const env = {
  SINNERVERSE_BUCKET: new FakeR2Bucket({ "test-object": fakeR2Object }),
  SINLESS_GAMES_BUCKET: new FakeR2Bucket({}),
  HELIX_AI_BUCKET: new FakeR2Bucket({})
}

describe("Cloudflare Worker Routes", () => {
  it("returns object for /SinnerVerse/ route", async () => {
    const request = new Request("http://localhost/SinnerVerse/test-object")
    const response = await app.fetch(request, env)
    expect(response.status).toBe(200)
    expect(await response.text()).toBe("Hello from bucket")
    expect(response.headers.get("etag")).toBe("fake-etag")
    expect(response.headers.get("Content-Type")).toBe("text/plain")
  })

  it("returns 404 for missing object on /SinnerVerse/", async () => {
    const request = new Request("http://localhost/SinnerVerse/missing-object")
    const response = await app.fetch(request, env)
    expect(response.status).toBe(404)
    expect(await response.text()).toBe("Object Not Found")
  })

  it("returns 404 for unmatched routes", async () => {
    const request = new Request("http://localhost/unknown-route")
    const response = await app.fetch(request, env)
    expect(response.status).toBe(404)
    expect(await response.text()).toBe("Route Not Found")
  })
})
