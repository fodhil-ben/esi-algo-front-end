import { FaSpinner } from 'react-icons/fa'

function ProcessingButton() {
    return (
        <button type="button" id='processingBtn' disabled className='flex w-fit gap-5 items-center m-auto'>
            <div><FaSpinner className="animate-spin h-5 w-5"></FaSpinner></div>
            Processing...
        </button>
    )
}

export default ProcessingButton