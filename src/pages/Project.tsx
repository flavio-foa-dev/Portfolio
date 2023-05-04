import { useParams } from "react-router-dom"


export default function Project() {
  const params = useParams()
  console.log(params)
  return (
    <div>Project</div>
  )
}
