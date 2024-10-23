import { getJestProjectsAsync } from "@nx/jest"

export default async () => ({
  preset: "ts-jest",
  projects: await getJestProjectsAsync(),
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
})
