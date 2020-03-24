import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import {
  Grid,
  Image,
  Segment
} from 'semantic-ui-react'
import test from '../../images/test.jpg';

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => images.push(r(item)));
  return images;
}

//const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|JPE?G)$/));

const images = [ test, test, test, test, test, test, test, test ]

class Gallery extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const imagesMatrix = images.reduce(
      (rows, key, index) =>
        (index % 3 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
        rows,
      []
    );
    
    return (
      <Segment style={{ padding: "4em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          {imagesMatrix.map((imagesRow, index) => {
            return (
              <Grid.Row centered columns={3}>
                {imagesRow.map(image => {
                  return (
                    <Grid.Column>
                      
                      <Image
                        className="zoom"
                        bordered
                        rounded
                        size="large"
                        src={test}
                        onClick={() => this.setState({ isOpen: true, photoIndex: index })}
                      />
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            );
          })}
        </Grid>
        {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                })
                }
                onMoveNextRequest={() =>
                this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                })
                }
            />
            )}
      </Segment>
    );
  }
}

export default Gallery;