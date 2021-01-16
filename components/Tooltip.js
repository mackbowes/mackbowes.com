import {useState} from 'react';

export default function Tooltip(props) {

    const [show, setShow] = useState(false);

    const tt = props => {
        if (show === true) {
            return (
                <div style={{
                    position: `absolute`,
                    top: `25px`,
                    left: `50%`
                }}>
                    {props.content}
                </div>
            )
        } else {
            return(null);
        }
    }

    const handleHover = () => {
        setShow(!show);
    }

    return(
        <div style={{position: `relative`,overflowX: `visible`}} onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()}>
            {tt(props)}
            {props.children}
        </div>
      )
}