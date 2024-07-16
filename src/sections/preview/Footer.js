// src/sections/Footer.js
import Button from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCropperActive } from "../../redux/actions";

function Footer() {
    const dispatch = useDispatch();
    const isCropperActive = useSelector((state) => state.ui.isCropperActive);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 25px',
                borderTop: '1px solid #494C55',
                height: 'fit-content',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '8px',
                }}
            >
                <Button text={"Start Copper"} type={"action"} onclick={() => dispatch(setCropperActive(true))} disabled={isCropperActive} />
                <Button text={"Remove Cropper"} type={"action"} onclick={() => dispatch(setCropperActive(false))} disabled={!isCropperActive} />
                <Button text={"Generative Preview"} type={"action"} disabled={!isCropperActive} />
            </div>

            <Button text={"Cancel"} type={"cancel"} />
        </div>
    );
}

export default Footer;
