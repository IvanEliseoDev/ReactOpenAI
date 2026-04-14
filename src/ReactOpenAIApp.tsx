import { RouterProvider } from "react-router"
import { router } from "./presentation/router/RouterApp"

export const ReactOpenAIApp = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
