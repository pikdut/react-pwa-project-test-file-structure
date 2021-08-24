import { Container, Col, Row } from "react-bootstrap"
import TeamWrapper from "../../../components/Wrapper/TeamWrapper"
import { teams } from "../data/team"

const TheTeam = () => {
    return (
        <Container >
            <span className="cprimary"> MEET OUR TEAM </span>
            <h2> WE ARE PROFESSIONALS </h2>
            <br />
            <br />
            <Row>
                {teams.map((team, id) => 
                    <Col key={id}>
                        <TeamWrapper img={team.img()} name={team.name} title={team.title} />
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default TheTeam