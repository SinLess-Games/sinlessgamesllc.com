import { Hono, Context, Env as HonoEnv } from "hono"
import { poweredBy } from "hono/powered-by"

// Extend Hono's environment type.
interface CFEnv extends HonoEnv {
  SINNERVERSE_BUCKET: R2Bucket
  SINLESS_GAMES_BUCKET: R2Bucket
  HELIX_AI_BUCKET: R2Bucket
}

const app = new Hono<CFEnv>()

app.use("*", poweredBy())

// Type guard to ensure the bucket has a 'get' method.
function isR2Bucket(bucket: unknown): bucket is R2Bucket {
  return typeof bucket === "object" && bucket !== null && "get" in bucket
}

async function serveFromBucket(
  c: Context<CFEnv>,
  bucketName: keyof CFEnv,
  prefix: string
): Promise<Response> {
  const url = new URL(c.req.url)
  const objectKey = url.pathname.replace(new RegExp(`^/${prefix}/`), "")

  // Retrieve the bucket from the environment
  const env = c.env as CFEnv
  const bucket = env[bucketName]

  // Narrow the type using our type guard
  if (!isR2Bucket(bucket)) {
    return c.text(`Bucket "${bucketName}" is not configured properly.`, 500)
  }

  const object = await bucket.get(objectKey)
  if (!object) {
    return c.text("Object Not Found", 404)
  }
  const headers = new Headers()
  object.writeHttpMetadata(headers)
  headers.set("etag", object.httpEtag)
  return new Response(object.body, { headers })
}

app.all("/SinnerVerse/*", async (c: Context<CFEnv>) => {
  return serveFromBucket(c, "SINNERVERSE_BUCKET", "SinnerVerse")
})

app.all("/Sinless-Games/*", async (c: Context<CFEnv>) => {
  return serveFromBucket(c, "SINLESS_GAMES_BUCKET", "Sinless-Games")
})

app.all("/Helix-AI/*", async (c: Context<CFEnv>) => {
  return serveFromBucket(c, "HELIX_AI_BUCKET", "Helix-AI")
})

app.all("*", (c: Context<CFEnv>) => {
  return c.text("Route Not Found", 404)
})

export default app
