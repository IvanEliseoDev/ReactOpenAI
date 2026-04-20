import React, { useRef, useState, type FormEvent } from 'react';
import { MyMessage } from '../sidebar/chat-bubles/MyMessage';

interface TextMessageBoxProps {
    onSendMessage: (message: string) => void;
    placeHolder?: string
    accept?: string

}

export const TextMessageBoxFIle = ({ onSendMessage, placeHolder, accept }: TextMessageBoxProps) => {

    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("handleSendMessage")
        const formData = new FormData(event.currentTarget);
        const message = formData.get('message') as string;
        if (message.trim().length === 0) return;
        onSendMessage(message)
    }

    const inputFileRef = useRef<HTMLInputElement>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.item(0)
        if (file) {
            setSelectedFile(file)
        }
    }

    return (
        <form onSubmit={handleSendMessage} className='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'>

            <div className='mr-3'>
                <button type="button" className='flex items-center justify-center text-gray-400 hover:text-gray-600' onClick={() => inputFileRef.current?.click()}>

                    <i className='fa-solid fa-paperclip text-xl'></i>
                </button>

                <input
                    type='file'
                    ref={inputFileRef}
                    accept={accept}
                    onChange={handleFileChange}
                    hidden
                >
                </input>
            </div>

            <div className='flex-grow'>
                <div className='relative w-full'>
                    <input type="text"
                        autoFocus
                        name='message'
                        className='flex w-full border rounded-xl text-gray-800 focus:outilne-none focus:border-indigo-300 pl-4 h-8'
                        placeholder={placeHolder}
                    />

                </div>
            </div>

            <div className='ml-4'>
                <button className='btn-primary' disabled = {!selectedFile}>
                    {
                        (!selectedFile) ? <span className='mr-2'>Enviar</span>
                            : <span className='mr-2'> {selectedFile.name.substring(0, 10) + "..."} </span>
                    }
                    <i className='fa-regular fa-paper-plane'></i>
                </button>
            </div>
        </form>
    )
}
