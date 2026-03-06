import type React from "react"
import { Card, Col, Row, Statistic } from "antd"

const StatisticComp: React.FC = () => {
    return (
        <>
            <Row gutter={[
                { xs: 8, sm: 16, md: 24, lg: 32 },   // X axis
                { xs: 8, sm: 16, md: 24, lg: 32 },   // Y axis
            ]}>
                <Col span={5} >
                    <Card variant="borderless" className="text-center">
                        <Statistic
                            title="Total Patient"
                            value={11.28}
                            precision={2}
                            styles={{ content: { color: '#3f8600' } }}
                        />
                    </Card>
                </Col>
                <Col span={5}>
                    <Card variant="borderless" className="text-center">
                        <Statistic
                            title="Doctors"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                        />
                    </Card>
                </Col>
                <Col span={5}>
                    <Card variant="borderless" className="text-center">
                        <Statistic
                            title="Emercency Case"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                        />
                    </Card>
                </Col>
                <Col span={5}>
                    <Card variant="borderless" className="text-center">
                        <Statistic
                            title="Staff"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                        />
                    </Card>
                </Col>
                <Col span={5}>
                    <Card variant="borderless" className="text-center">
                        <Statistic
                            title="Nurses"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                        />
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default StatisticComp