import type { FormEvent } from 'react';
import { MyMessage } from '../sidebar/chat-bubles/MyMessage';

interface TextMessageBoxProps{
    onSendMessage: (message:string) => void;
    placeHolder?:string
    disableCorrections?: boolean
}

export const TextMessageBox = ({onSendMessage,placeHolder,disableCorrections=true }:TextMessageBoxProps) => {

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    console.log("handleSendMessage")
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message') as string;
    if (message.trim().length === 0) return;
    onSendMessage(message)
  }
  return (
    <form onSubmit={handleSendMessage} className='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'>
        
        <div className='flex-grow'>
            <div className='relative w-full'>
                <input type="text"
                  autoFocus
                  name='message' 
                  className='flex w-full border rounded-xl text-gray-800 focus:outilne-none focus:border-indigo-300 pl-4 h-8'
                  placeholder={placeHolder}
                  autoComplete={disableCorrections ? 'off' : 'on'}
                  autoCorrect={disableCorrections? 'off' :  'on'}
                  spellCheck={disableCorrections ? "true" : "false"}
                  />
                  
            </div>
        </div>

        <div className='ml-4'>
            <button className='btn-primary'>
                <span className='mr-2'>Enviar</span>
                <i className='fa-regular fa-paper-plane'></i>
            </button>
        </div>
    </form>
  )
}
