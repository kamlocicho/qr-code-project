import { StyledCard } from "./styles/Card.styled";

export default function Card() {
    return (
        <StyledCard>
            <img src="/image-qr-code.png" alt="image qr code" />
            <div>
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </StyledCard>
    )
}
