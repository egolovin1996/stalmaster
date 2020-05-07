import React from "react";
import { Button, Grid, Image, Header, Segment } from "semantic-ui-react";
import sert from "../../home/sert.jpg";

export default class Fire extends React.Component {
  render() {
    return (
      <Segment style={{ padding: "3em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                О компаниии
              </Header>
              <p style={{ fontSize: "1.35em" }}>
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
              <Header as="h3" style={{ fontSize: "2em" }}>
                Противопожарные двери EI 60
              </Header>
              <p style={{ fontSize: "1.35em" }}>
                <b>Класс EI 60</b> обеспечивает защиту от огня, продуктов
                горения и высокой температуры. При установки двери данного
                класса обеспечивается наивысшая защита в течении <b>60 минут</b>
                .
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Дымогазонепроницаемые двери EIS 60
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <b>Класс EIS 60</b> добавляет защиту от дыма и газа к обычным
                противопожарным дверям класса <b>EI 60</b>. При установки двери
                данного класса обеспечивается защита в течении <b>60 минут</b>.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="large" src={sert} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Узнать больше</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
