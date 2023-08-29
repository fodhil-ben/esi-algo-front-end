import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { javascript } from '@codemirror/lang-javascript';
import { BsFillPlayFill } from 'react-icons/bs';
import ResultPopup from './ResultPopup';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useSubmitCode } from '../../hooks/useSubmitCode';


interface CodeEditorProps {
    startCode: string
    input_: string
    output: string
}
const ProblemSetCodeEditor: FC<CodeEditorProps> = ({ startCode = '', input_, output }) => {

    const { auth } = useAuthContext()
    const { submit, message } = useSubmitCode()
    const { problemSetId, exerciceId } = useParams()

    const [code, setCode] = useState('')
    const [submitCode, setSubmitCode] = useState(false)

    useEffect(() => {
        const userCode = localStorage.getItem(`code-${problemSetId}-${exerciceId}`) || ''
        if (auth) {
            const codeWithoutIrrelevant = startCode.split('// Below Is Irrelevant For YOU.')[0]
            setCode(userCode ? userCode : codeWithoutIrrelevant)
        } else {
            setCode(startCode)
        }
    }, [exerciceId, auth, startCode])

    const onChange = (value: string) => {
        setCode(value)
        localStorage.setItem(`code-${problemSetId}-${exerciceId}`, value)
    }

    const handleClick = () => {
        console.log(startCode)
        const submitedCode = code + startCode.split('// Below Is Irrelevant For YOU.')[1]
        submit(submitedCode, input_, output)
        setSubmitCode(true)
    }

    return (
        <div className='h-full text-sm '>
            <CodeMirror className='h-full relative'
                value={code}
                theme={vscodeDark}
                onChange={onChange}
                extensions={[javascript()]}
            >

                <button onClick={handleClick} className='z-10 bg-gray border-[20px] border-secondary bg-secondary-color text-white rounded-full text-3xl md:text-5xl  xl absolute bottom-10 right-14'><BsFillPlayFill></BsFillPlayFill></button>
            </CodeMirror>
            {submitCode && <ResultPopup setSubmitCode={setSubmitCode} message={message} />}
        </div>
    )
}

export default ProblemSetCodeEditor