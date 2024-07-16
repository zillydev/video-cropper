// src/sections/Footer.js
import Button from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCropperActive } from "../../redux/actions";

function Footer() {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 25px',
                borderTop: '1px solid #494C55',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                }}
            >
                <Button text={"Export to JSON"} type={"action"} />
                <Button text={"Load from JSON"} type={"action"} />
                <Button text={"Export MP4"} type={"action"} />
            </div>

            <Button text={"Cancel"} type={"cancel"} />
        </div>
    );
}

export default Footer;
