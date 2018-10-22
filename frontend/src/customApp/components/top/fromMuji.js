import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import ItemImageList from "../panel/itemImageList";
import { Card,Button } from "antd";
import FromMujiWrapper from "./fromMuji.style";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import { Row, Col } from "antd";

const { Meta } = Card;

class FromMuji extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: 10
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 10 };
    });
  }

  render() {
  const { fromMujis } = this.props;
  return (
      <FromMujiWrapper>
        <h1 className="from-muji-title">from MUJI</h1>
        <Row type="flex" justify="center" align="top" style={{padding:0, margin:0}}>
            {fromMujis &&
              fromMujis.slice(0, this.state.visible).map((item,index) => {
                return (
                <Card
                  hoverable
                  cover={<img alt="example" src={item.img_src} />}
                  className="cards"
                  key={index}
                  style={{margin:30, width:258 }}
                >
                 {index < 15 ? <span className="cards-new">NEW</span> : null}
                  <Meta
                    title={item.title}
                    description={item.date}
                    className="cards-meta"
                  />
                </Card>
                );
             })}
        </Row>
        {this.state.visible < 45 &&
          <p onClick={this.loadMore} type="button" className="load-more"><IntlMessages id="top.fromMuji.load_more" /></p>
        }
      </FromMujiWrapper>
    );
  }
}

const mapStateToProps = state => {
  return state.Top.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(FromMuji);
