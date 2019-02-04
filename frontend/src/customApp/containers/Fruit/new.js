import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, Form, Input, Button } from "antd";
import actions from "../../redux/fruit/entity/actions";
import { injectIntl } from "react-intl";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";

class NewEntity extends Component {
  state = {
    entity: this.props.entity
  };

  componentDidMount() {
    this.props.initCleanup();
    this.props.initRequest();
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    const { created, entity, createCleanup, history } = this.props;

    if (created) {
      const primaryKey = entity["fruit_code"];
      createCleanup();
      history.push(`/fruits/${primaryKey}`);
    }
  }

  handleSubmit = () => {
    this.props.createRequest(this.state.entity);
  };

  updateEntity = (keyName, value) => {
    const entity = {
      ...this.state.entity,
      [keyName]: value
    };
    this.setState({ entity });
  };

  render() {
    const { initializing, initialized, creating, created } = this.props;

    return (
      <ContentAreaLayout>
        <h1>新規作成画面</h1>
        <Spin spinning={initializing || creating}>
          <Form>
            <Form.Item label="name">
              <Input
                placeholder="name"
                value={this.state.entity.name}
                onChange={e => this.updateEntity("name", e.target.value)}
              />
            </Form.Item>
            <Form.Item label="description">
              <Input
                placeholder="description"
                value={this.state.entity.description}
                onChange={e => this.updateEntity("description", e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                onClick={() => {
                  this.handleSubmit();
                }}
              >
                作成
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const { init, create } = actions;

const mapStateToProps = state => {
  return state.Fruit.Entity.toJS();
};

const actionCreators = {
  initRequest: init.request,
  initCleanup: init.cleanup,
  createRequest: create.request,
  createCleanup: create.cleanup
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(NewEntity);
