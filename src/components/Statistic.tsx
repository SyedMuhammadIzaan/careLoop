import type React from "react"
import { Card, Col, Row, Statistic } from "antd"

const StatisticComp:React.FC = () => {
    return (
        <>
            <Row gutter={16}>
                <Col span={12}>
                    <Card variant="borderless">
                        <Statistic
                            title="Total Patient"
                            value={11.28}
                            precision={2}
                            styles={{ content: { color: '#3f8600' } }}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card variant="borderless">
                        <Statistic
                            title="Doctors"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card variant="borderless">
                        <Statistic
                            title="Emercency Case"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card variant="borderless">
                        <Statistic
                            title="Staff"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card variant="borderless">
                        <Statistic
                            title="Nurses"
                            value={9.3}
                            precision={2}
                            styles={{ content: { color: '#cf1322' } }}
                            suffix="%"
                        />
                    </Card>
                </Col>
                
            </Row>
        </>
    )
}

export default StatisticComp