import { TypingLoaders } from "../../components/loaders/TypingLoaders"
import { GPTMessage } from "../../components/sidebar/chat-bubles/GPTMessage"
import { MyMessage } from "../../components/sidebar/chat-bubles/MyMessage"

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2"> 

          {/*Bienvenido/a */}
          <GPTMessage text="Hola, Puedes escribir tu texto en español" />

          <MyMessage text="Hola Mundo" />

          <TypingLoaders classname="fade-in"/>
        </div>
      </div>
    </div>
  )
}
