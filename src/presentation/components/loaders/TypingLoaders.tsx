import './TypingLoader.css'

interface TypingLoaders{
    classname?: string
}

export const TypingLoaders = ({classname}:TypingLoaders) => {
  return (
    <div className={`typing ${classname}`}>
        <span className="circle scaling"></span>
        <span className="circle scaling"></span>
        <span className="circle scaling"></span>
    </div>
  )
}
