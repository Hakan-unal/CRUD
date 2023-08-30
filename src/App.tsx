import { Row, Typography, Col, Image, Switch, Result } from 'antd';
import { title1, title2, title3, title4, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7, paragraph8, paragraph9 } from "./language/language"
import { useState } from 'react';
import { GiRabbit } from "react-icons/gi";

const { Title, Paragraph, Text, Link } = Typography;


const App = () => {
  const [translate, setTranslate] = useState<boolean>(false)

  return (<Row justify={"center"}>


    <Switch unCheckedChildren={<div>TR</div>} checkedChildren={<div>EN</div>} onChange={(checked) => setTranslate(checked)} />

    <Col sm={24}>

      <Title level={1}>{title1(translate)}</Title>

      <Paragraph >
        {paragraph1(translate)}
      </Paragraph>

    </Col>
    <Col sm={8}>
      <Image width={"80%"} src='https://cdn.dribbble.com/users/52927/screenshots/2436222/remoteserviceanimation800-600.gif' />
    </Col>
    <Col sm={16}>
      <Title level={2}>{title2(translate)}</Title>
      <Paragraph>
        {paragraph2(translate)}
      </Paragraph>
    </Col>

    <Col sm={24}>
      <Title level={3}>{title3(translate)}</Title>
      <Paragraph>
        <ul>
          <li>
            {paragraph3(translate)}
          </li>
          <li>
            {paragraph4(translate)}
          </li>
          <li>
            {paragraph5(translate)}
          </li>
          <li>
            {paragraph6(translate)}
          </li>
        </ul>
      </Paragraph>
    </Col>

    <Col xs={{ span: 12 }}>
      <Image width={"100%"} src='https://cdn-blog.scalablepath.com/uploads/2022/12/spa-va-mpa-key-features-1024x800.png' />
    </Col>

    <Col sm={24}>
      <Title level={3}>{title4(translate)}</Title>
      <Paragraph>
        <ul>
          <li>
            {paragraph7(translate)}
          </li>
          <li>
            {paragraph8(translate)}
          </li>
          <li>
            {paragraph9(translate)}
          </li>
        </ul>
      </Paragraph>
    </Col>

  </Row>
  )
}


export default App;