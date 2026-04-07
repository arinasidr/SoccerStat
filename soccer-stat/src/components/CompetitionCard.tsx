import { Card, Typography } from 'antd'
import { Link } from 'react-router-dom'
import type { Competition } from '../types/competition'
const { Title, Text } = Typography

export default function CompetitionCard({ competition }: { competition: Competition}) {
    return (
        <Link to={`/competitions/${competition.id}`}>
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
                        alt={competition.name}
                        src={competition.emblem}
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
            <Title level={5} style={{ margin: 0, textAlign: "center"}}>{competition.name}</Title>
            <Text type='secondary' style={{ display: "block", textAlign: "center" }}> {competition.area?.name}</Text>
            </Card>
        </Link>
    )
}