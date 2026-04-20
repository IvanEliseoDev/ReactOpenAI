import { useState } from "react"
import { TextMessageBox } from "../../components/chat-input-boxes/TextMessageBox"
import { TypingLoaders } from "../../components/loaders/TypingLoaders"
import { GPTMessage } from "../../components/sidebar/chat-bubles/GPTMessage"
import { MyMessage } from "../../components/sidebar/chat-bubles/MyMessage"

interface Message {
  text: string;
  isGPT: boolean;

}
export const ChatTemplate = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [messages, setmessages] = useState<Message[]>([])

  const handlePost = async(myText:string) => {
    setIsLoading(true)
    setmessages((prev) => [...prev, {text: myText, isGPT: false}])
    //TODO UseCase
    setIsLoading(false)
    //TODO Añadir el mensaje isGPT en true
  }
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">

          {/*Bienvenido/a */}
          <GPTMessage text="Hola, Puedes escribir tu texto en español" />
          {
            messages.map((message, index) => (
              message.isGPT ? (<GPTMessage key={index} text="Esto es de OpenAI" />) : (<MyMessage key={index} text={message.text} />)
            ))
          }

          {
            isLoading && (
              <div className="col-start-1 col-end-12 fade-in">
                <TypingLoaders classname="fade-in" />
              </div>
            )
          }


        </div>
      </div>

      <TextMessageBox onSendMessage={handlePost} placeHolder="Escribe aqui lo que deseas traducir" disableCorrections />
    </div>
  )
}
