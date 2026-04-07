import { Card, Typography } from 'antd'
import { Link } from 'react-router-dom'
import type { Team } from '../types/teams'
const { Title } = Typography

export default function TeamCard({ team }: { team: Team}) {
    return (
        <Link to={`/teams/${team.id}`} state={{ name: team.name }}>
            <Card 
                hoverable
                style={{ height: 300 }}
                cover = {
                     <div
                        style={{
                            height: 200,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 20,
                        }}
                        >
                    <img
                        alt={team.name}
                        src={team.crest}
                        loading='lazy'
                        onError={(e) => {
                            const img = e.currentTarget
                            img.onerror = null
                            img.src = '/placeholder.png'
                        }}
                        style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                    </div>
                }
            > 
            <Title level={5} style={{ margin: 0, textAlign: "center"}}>{team.name}</Title>
            </Card>
        </Link>
    )
}