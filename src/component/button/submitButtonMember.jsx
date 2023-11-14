import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
function submitButtonMember({handleSubmit}) {
    return (
        <div className="lg:mt-1">
            <Button variant="contained" color='error' endIcon={<SendIcon />} onClick={handleSubmit}>
                Send
            </Button>

        </div>
    )
}

export default submitButtonMember