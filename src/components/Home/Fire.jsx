import React from "react";
import { Link } from 'react-router-dom'
import { Button, Grid, Image, Header, Segment } from "semantic-ui-react";
import shop from "../../home/shop.jpg";

export default class Fire extends React.Component {
  render() {
    return (
      <Segment style={{ padding: "3em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "1.5em" }}>
                О компаниии
              </Header>
              <p style={{ fontSize: "1.25em", textAlign: "justify" }}>
                С момента основания с 1994 года компания «Стальмастер» (г.
                Екатеринбург) специализируется на изготовлении стальных дверей -
                безопасных, тепло- и звукоизолированных, красивых и долговечных.
                Все стальные двери, несмотря на различия в конструкции и цене,
                имеют одну общую особенность: оптимальное сочетание параметров
                цена-качество. Именно высокий уровень качества исполнения при
                вполне доступной цене обуславливают их востребованность на
                потребительском рынке. Мы предлагаем надежныесейф-двери для
                Вашей квартиры, дома или офиса. Наши сейф-двери подходят для
                установки на входе в производственные помещения крупных
                предприятий и банковских учреждений. Вся продукция
                сертифицирована и соответствует требованиям государственных и
                отраслевых стандартов.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={8}>
              <Link to='/gallery'>
                <Image rounded size="big" src={shop} />
              </Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <a target="_blank" rel="noopener noreferrer" href="http://stalmaster.ru">
                <Button size="huge">
                  Сейф двери
                </Button>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
