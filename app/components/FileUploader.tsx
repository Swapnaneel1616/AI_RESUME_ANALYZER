import React, {useCallback} from 'react'
import {useDropzone} from "react-dropzone";
import {formatSize} from "~/lib/utils";

interface  FileUploaderProps{
    onFileSelect ?: (file:File | null) => void;
}

const FileUploader = ({onFileSelect} : FileUploaderProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null ;

        onFileSelect?.(file)
        // Do something with the files
    }, [onFileSelect])
    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop , multiple:false , accept: {'application/pdf' : [".pdf"]}, maxSize: 20*1024*1024})
    const file = acceptedFiles[0] || null ;
    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="space-y-4 cursor-pointer">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center">
                        <img src="/icons/info.svg" alt="upload" className="size-20"/>
                    </div>

                    {file?(
                        <div className="uploader-selected-file">
                            <img src="/images/pdf.png" alt="pdf" className="size-10" />
                            <div className="flex flex-col gap-1">
                                <p className="font-semibold text-gray-900">{file.name}</p>
                                <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
                            </div>
                        </div>
                    ):(
                        <div>
                            <p className="text-lg text-gray-500 " >
                                <span className="font-semibold">
                                    Click to uplaod
                                </span> or drag and drop
                            </p>
                            <p className="text-lg text-gray-500">PDF (max 20MB)</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default FileUploader
