import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Row, Col, Icon, List } from 'antd';
import Button, {ButtonGroup} from '../../components/uielements/button';
import Breadcrumb, {BreadcrumbItem} from '../../components/uielements/breadcrumb';
import Menu, {MenuChildItem, MenuSubMenu, MenuItemGroup} from '../../components/uielements/menu';
import Dropdown, {DropdownButtons, DropdownMenu, MenuItem, SubMenu} from '../../components/uielements/dropdown';
import RadioBox, {RadioGroup, RadioButton} from '../../components/uielements/radio';
import Checkbox, {CheckboxGroup} from '../../components/uielements/checkbox';
import Input, {InputSearch, InputGroup, Textarea} from '../../components/uielements/input';
import Form, {FormItem} from '../../components/uielements/form';
import Select, {SelectOption, SelectOptionGroup} from '../../components/uielements/select';
import Pagination from '../../components/uielements/pagination';
import Datepicker, {DateRangepicker, DateMonthpicker, DateWeekpicker} from '../../components/uielements/datePicker';
import message from '../../components/uielements/message';
import PageHeader from '../../components/utility/pageHeader';
import Tooltip from '../../components/uielements/tooltip';
import Steps, {Step} from '../../components/uielements/steps';
import { ComponentGuideWrapper } from './componentguide.style';
import moment from 'moment';

const { Header, Content } = Layout;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const plainOptions = ['Apple', 'Pear', 'Orange'];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class ComponentGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };

    const onClick = function ({ key }) {
      message.info(`${key}がクリックされました。`);
    };

    this.menu = (
      <DropdownMenu　onClick={onClick}>
        <MenuItem>
          <a target="_blank" key="1" rel="noopener noreferrer">アイテム１</a>
        </MenuItem>
        <MenuItem>
          <a target="_blank" key="2" rel="noopener noreferrer">アイテム２</a>
        </MenuItem>
        <MenuItem>
          <a target="_blank" key="3" rel="noopener noreferrer">アイテム３</a>
        </MenuItem>
        <MenuItem key="4" disabled>アイテム４（非活性）</MenuItem>
      </DropdownMenu>
    );

  }

  // ページネーション用の関数
  showTotal(total) {
    return `合計: ${total} `;
  }

  render() {

    return (
      <Layout style={{ background: 'none' }}>
        <ComponentGuideWrapper className="isomorphicTodoComponent">
        　<p>
           <h2 className="isoGuideHeader">まえがき</h2>
           このページではライブラリの提供するUIコンポーネントを一覧でご紹介します。
           <br/>ソースについては直に'src/containers/ComponentGuide/index.js'をご参照ください。
          </p>
          <p>
          <h2 className="isoGuideHeader">ボタン<a href="https://ant.design/components/button/" target="_blank"><Icon type="link" /></a></h2>
            Buttonコンポーネントを使用します。
            <ul className="isoGuideList">
            <li>
                <h4 className="isoGuideHeader c2">種別</h4>
                <div className="sampleContainer">
                  <Button type="primary">Primary</Button>
                  <Button>Default</Button>
                  <Button type="dashed">Dashed</Button>
                  <Button type="danger">Danger</Button>
                </div>
              </li>
              <li>
                <h4 className="isoGuideHeader c2">サイズ</h4>
                <div className="sampleContainer">
                  <Button size="large">Large</Button>
                  <Button size="default">Default</Button>
                  <Button size="small">Small</Button>
                </div>
              </li>
              <li>
                <h4 className="isoGuideHeader c2">角丸ボタン</h4>
                <div className="sampleContainer">
                  <Button type="primary" shape="circle" icon="search"/>
                </div>
              </li>
              <li>
                <h4 className="isoGuideHeader c2">アイコン付きボタン<Tooltip title="アイコン一覧を見る"><a href="https://ant.design/components/icon/#Directional-Icons" target="_blank"><Icon type="link" /></a></Tooltip></h4>
                <div className="sampleContainer">
              　<Button type="primary" icon="download">ダウンロード</Button>
                </div>
              </li>
              <li>
                <h4 className="isoGuideHeader c2">ローディングボタン</h4>
                  <div className="sampleContainer">
                  <Button type="primary" loading>
                    Loading
                  </Button>
                </div>
              </li>
              <li>
                <h4 className="isoGuideHeader c2">活性・不活性ボタン</h4>
                <div className="sampleContainer">
                  <Button type="primary" disabled>
                    Loading
                  </Button>
                </div>
              </li>
              <li>
                <h4 className="isoGuideHeader c2">透過ボタン（通常は背景色があるときに使用する）</h4>
                <div className="sampleContainer ghostButtonContainer">
                  <Button type="primary" ghost>
                    Loading
                  </Button>
                </div>
              </li>
              <li>
              <h4 className="isoGuideHeader c2">グループ化（複数のButtonをButtonGroupに入れることができる）</h4>
              <div className="sampleContainer">
                <ButtonGroup>
                  <Button type="primary">
                    <Icon type="left" />前に戻る
                  </Button>
                  <Button type="primary">
                    先へ進む<Icon type="right" />
                  </Button>
                </ButtonGroup>
              </div>
              </li>
            </ul>
          </p>
          <p>
            <h2 className="isoGuideHeader">アイコン
            <a href="https://ant.design/components/icon/" target="_blank"><Icon type="link" /></a></h2>
            アイコンを使うときは、Iconコンポーネントを使用します。また、Buttonコンポーネントのiconプロパティにアイコンを指定することもできます。
            <div className="sampleContainer">
             <Icon type="plus-circle-o" /><br/>
             <Button type="default" icon="link">ボタン</Button>
            </div>
          </p>
          <p>
            <h2 className="isoGuideHeader">パンくずリスト
            <a href="https://ant.design/components/breadcrumb/" target="_blank"><Icon type="link" /></a>
            </h2>
            Breadcrumbコンポーネントを使用します。
            <br/>
            区切り文字を変更する場合はseparatorプロパティを使ってカスタマイズすることができます。
            <div className="sampleContainer">
              <Breadcrumb separator=">">
                {/* TODO: このコンポーネントをwrapしてよいかどうか質問する */}
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem><a href="">AAA</a></BreadcrumbItem>
                <BreadcrumbItem><a href="">BBB</a></BreadcrumbItem>
                <BreadcrumbItem>コンポーネントガイド</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </p>
          <p>
            <h2 className="isoGuideHeader">ドロップダウン
            <a href="https://ant.design/components/dropdown/" target="_blank"><Icon type="link" /></a>
            </h2>
            ドロップダウンにはDropdownコンポーネント、メニューにはDropdownMenuコンポーネントを使用します。<br/>
            DropdownMenuを使用して作成したメニューはあらかじめ変数に定義しておき、Dropdownコンポーネントのoverlayプロパティに設定することができます。<br/>
            ドロップダウンの出現イベントはTriggerプロパティによって変更することが可能です。
            {/* menu という変数は本ファイル内上部で定義済み */}
            <div className="sampleContainer">
              <Dropdown overlay={this.menu}>
                <a className="ant-dropdown-link">
                  マウスをかざしてください <Icon type="down" />
                </a>
              </Dropdown>
              <br/>
              <Dropdown overlay={this.menu} trigger={['click']}>
                <a className="ant-dropdown-link">
                  クリックしてください <Icon type="down" />
                </a>
              </Dropdown>
              <br/>
              <Dropdown overlay={this.menu} trigger={['contextMenu']}>
                <a className="ant-dropdown-link">
                  右クリックしてください <Icon type="down" />
                </a>
              </Dropdown>
              </div>
              DropdownButtonsコンポーネントを利用すればドロップダウンを枠で囲んだデザインにすることができます。
              <div className="sampleContainer">
                <DropdownButtons
                // onClick={handleButtonClick} 
                overlay={this.menu}>
                  Dropdown
                </DropdownButtons>
                <DropdownButtons
                  // onClick={handleButtonClick}
                  overlay={this.menu}
                  disabled
                  style={{ marginLeft: 8 }}
                >
                  Dropdown
                </DropdownButtons>
                <Dropdown overlay={this.menu}>
                  <Button style={{ marginLeft: 8 }}>
                    Button <Icon type="down" />
                  </Button>
                </Dropdown>
            </div>
          </p>
          <p>
            <h2 className="isoGuideHeader">セレクトボックス
            <a href="https://ant.design/components/select/" target="_blank"><Icon type="link" /></a>
            </h2>
            Select, SelectOptionコンポーネントを使用します。<br/>
            サイズはsmall, default, largeから選べます。
            <div className="sampleContainer">
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <SelectOption value="jack">Jack</SelectOption>
                <SelectOption value="lucy">Lucy</SelectOption>
                <SelectOption value="disabled" disabled>Disabled</SelectOption>
                <SelectOption value="Yiminghe">yiminghe</SelectOption>
              </Select>
            </div>

            上の例のように単一のオプションを非活性にすることもでき、下の例のようにセレクトボックス全体を非活性にすることも可能です。
            <div className="sampleContainer">
              <Select size="small" defaultValue="lucy" style={{ width: 120 }} disabled>
                <SelectOption value="lucy">Lucy</SelectOption>
              </Select>
            </div>

            filterOptionプロパティに関数を定義すれば、検索機能付きのセレクトボックスを実装することもできます。<br/>
            セレクトボックスをクリックしたあとに何らかのアルファベットを入力してみてください。
            <div className="sampleContainer">
              <Select
                size="large" 
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <SelectOptionGroup label="マネージャー">
                  <SelectOption value="April">April</SelectOption>
                  <SelectOption value="Bob">Bob</SelectOption>
                  <SelectOption value="Chloe">Chloe</SelectOption>
                </SelectOptionGroup>
                <SelectOptionGroup label="エンジニア">
                  <SelectOption value="Daniel">Daniel</SelectOption>
                  <SelectOption value="Erin">Erin</SelectOption>
                  <SelectOption value="Fred">Fred</SelectOption>
                  <SelectOption value="Gregory">Gregory</SelectOption>
                  <SelectOption value="jack">Jack</SelectOption>
                  <SelectOption value="lucy">Lucy</SelectOption>
                  <SelectOption value="tom">Tom</SelectOption>
                  <SelectOption value="yogi">Yogi</SelectOption>
                  <SelectOption value="zeal">Zeal</SelectOption>
                </SelectOptionGroup>
              </Select>
            </div>
            上記の例では、SelectOptionGroupコンポーネントを使用してオプションのカテゴリ名を表示しています。<br/><br/><br/>

            Selectコンポーネントはいろいろなモードがあります。
            <br/>
            Multipleモードを用いれば複数選択できるセレクトボックスを実装できます。
            <a href="https://codesandbox.io/s/kwl747n2qr" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>            
            <br/>            
            Tagsモードを使えば入力値を登録することができるセレクトボックスを作ることができます。
            <a href="https://codesandbox.io/s/v0qm75vo8y" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>            

            <br/><br/>
            Multipleモード、またはTagsモードのときは、tokenSeparatorsを指定することでコピー＆ペーストされた値を複数選択できるようにすることができます。言葉だけだと説明がむずかしいので、実装例の入力欄に「Lucy,Jack」をコピー＆ペーストしてみてください。
            <a href="https://codesandbox.io/s/zkk2o39zq4" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>            

            セレクトボックスは通信や他のコンポーネントとの組み合わせで多様な実装が可能です。
            <ul class="simpleListContainer">
              <li>
                複数のセレクトボックスを連動
                <a href="https://codesandbox.io/s/j4w1mp8x6w" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>            
              </li>
              <li>
                Ajax通信をして結果を入力補助に使用
                <a href="https://codesandbox.io/s/4xm27y0mpw" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>            
              </li>
              <li>
                メールアドレス用にドメインを補助入力
                <a href="https://codesandbox.io/s/9koom957w" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>            
              </li>
              <li>
                選択された値をhandleChangeイベントハンドラで受け取る
                <a href="https://codesandbox.io/s/98mz3y7l1w" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>            
              </li>
            </ul>
          </p>
          <p>
            <h2 className="isoGuideHeader">チェックボックス
            <a href="https://ant.design/components/checkbox/" target="_blank"><Icon type="link" /></a>
            </h2>
            Checkboxコンポーネントを使用します。
            <div className="sampleContainer">
             <Checkbox>チェックボックス</Checkbox>
             <Checkbox defaultChecked={true}>初期値が選択状態のチェックボックス</Checkbox>
             <Checkbox checked={true}>常に選択状態のチェックボックス</Checkbox>
             <Checkbox disabled={true}>無効化されたチェックボックス</Checkbox>
             <br/>
            </div>

            CheckboxGroupコンポーネントはCheckboxを囲むことにより、複数のチェックボックスをグループ化することができます。
            <br/>
            グループ化されたチェックボックスはCheckboxGroupのdefaultValue属性によって初期値を設定したり、全選択・全解除の実装をすることができます。
            <a href="https://codesandbox.io/s/43lp1my2o9" target="_blank"><Tooltip title="全選択・全解除の実装を見る。"><Icon type="link" /></Tooltip></a>
            <div className="sampleContainer">
              <CheckboxGroup defaultValue={['A']}>
                <Checkbox value={'A'}>選択肢A</Checkbox>
                <Checkbox value={'B'}>選択肢B</Checkbox>
              </CheckboxGroup>
            </div>

            CheckboxGroupコンポーネントは別に定義した配列を受け取り、それをチェックボックスとして表示することができます。<br/>
            Sagaでサーバと通信した結果を配列としてStoreに登録し、表示時にそれをCheckboxGroupに渡して使うというような実装ができそうです。<br/>
            下記の例では <code>['Apple', 'Pear', 'Orange'];</code> を受け取って表示しています。<br/>
            このときCheckboxGroupをdisabledに指定しておくとグループ全体を非活性にできます。
            <br/>
            <div className="sampleContainer">
              <CheckboxGroup options={plainOptions} defaultValue={['Apple', 'Orange']} />
              <br /><br />
              <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple', 'Orange']} />
            </div>


            グリッドを定義するRowやColコンポーネントと組み合わせれば複雑なレイアウトを行うことができます。
            <div className="sampleContainer">
            <CheckboxGroup style={{ width: '100%' }}>
              <Row>
                <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                <Col span={8}><Checkbox value="B">B</Checkbox></Col>
                <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                <Col span={8}><Checkbox value="E">E</Checkbox></Col>
              </Row>
            </CheckboxGroup>
            </div>

          </p>
          <p>
            <h2 className="isoGuideHeader">ラジオボタン
            <a href="https://ant.design/components/radio/" target="_blank"><Icon type="link" /></a>
            </h2>
            RadioBox, RadioButton, RadioGroupコンポーネントを使用します。<br/>
            RadioBoxは通常のラジオボタンの形、RadioButtonはボタン型のデザインです。<br/>
            <div className="sampleContainer">
              <RadioBox>Radiobox</RadioBox>
              <RadioButton value="a">RadioButton</RadioButton>
            </div>

            RadioGroupコンポーネントを使用すれば数のラジオボタンをグループ化することも可能です。
            <br/>
            ラジオボタンなので、同じグループ内では一つしか選ぶことができません。
            <div className="sampleContainer">
              <RadioGroup defaultValue="a">
                <RadioBox value="a">選択肢A</RadioBox>
                <RadioBox value="b">選択肢B</RadioBox>
                <RadioBox value="c">選択肢C</RadioBox>
              </RadioGroup>
              <br/>
              <RadioGroup defaultValue="a">
                <RadioButton value="a">選択肢１</RadioButton>
                <RadioButton value="b">選択肢２</RadioButton>
                <RadioButton value="c">選択肢３</RadioButton>
              </RadioGroup>
            </div>

            RadioButtonは3つのサイズから選べます。サイズはRadioGroupに指定してください。<br/>
            <div className="sampleContainer">
              <RadioGroup defaultValue="a" size="large">
                <RadioButton value="a">large</RadioButton>
                <RadioButton value="b">medium</RadioButton>
                <RadioButton value="c">small</RadioButton>
              </RadioGroup>
              <br/>
              <RadioGroup defaultValue="a">
                <RadioButton value="a">large</RadioButton>
                <RadioButton value="b">medium</RadioButton>
                <RadioButton value="c">small</RadioButton>
              </RadioGroup>
              <br/>
              <RadioGroup defaultValue="a" size="small">
                <RadioButton value="a">large</RadioButton>
                <RadioButton value="b">medium</RadioButton>
                <RadioButton value="c">small</RadioButton>
              </RadioGroup>
            </div>

            RadioGroupコンポーネントは別に定義した配列を受け取り、それをラジオボタンとして表示することができます。<br/><br/>
            下記の例では <code>['Apple', 'Pear', 'Orange'];</code> を受け取って表示しています。<br/>
            このときRadioGroupにdisabledを指定すると、グループ全体を非活性状態にすることができます。
            <div className="sampleContainer">
              <RadioGroup options={plainOptions} defaultValue={['Apple']} />
              <br /><br />
              <RadioGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} />
            </div>

          </p>
          <p>
            <h2 className="isoGuideHeader">メニュー
              <a href="https://ant.design/components/menu/" target="_blank"><Icon type="link" /></a>
            </h2>
            Menuコンポーネントを使用します。<br/>
            modeは縦・横・インラインの三種類、themeはライト・ダークの二種類があります。<br/><br/>
            横の場合：
            <div className="sampleContainer">
              <Menu
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <MenuChildItem key="mail">
                  <Icon type="mail" />Navigation One
                </MenuChildItem>
                <MenuChildItem key="app" disabled>
                  <Icon type="appstore" />Navigation Two
                </MenuChildItem>
                <MenuSubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                  <MenuItemGroup title="Item 1">
                    <MenuChildItem key="setting:1">Option 1</MenuChildItem>
                    <MenuChildItem key="setting:2">Option 2</MenuChildItem>
                  </MenuItemGroup>
                  <MenuItemGroup title="Item 2">
                    <MenuChildItem key="setting:3">Option 3</MenuChildItem>
                    <MenuChildItem key="setting:4">Option 4</MenuChildItem>
                  </MenuItemGroup>
                </MenuSubMenu>
                <MenuChildItem key="alipay">
                  <a href="https://ant.design/components/menu/" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </MenuChildItem>
              </Menu>
            </div>

            <br/>
            縦の場合：
            <div className="sampleContainer">
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
              >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <MenuItemGroup key="g1" title="Item 1">
                    <MenuItem key="1">Option 1</MenuItem>
                    <MenuItem key="2">Option 2</MenuItem>
                  </MenuItemGroup>
                  <MenuItemGroup key="g2" title="Item 2">
                    <MenuItem key="3">Option 3</MenuItem>
                    <MenuItem key="4">Option 4</MenuItem>
                  </MenuItemGroup>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                  <MenuItem key="5">Option 5</MenuItem>
                  <MenuItem key="6">Option 6</MenuItem>
                  <SubMenu key="sub3" title="Submenu">
                    <MenuItem key="7">Option 7</MenuItem>
                    <MenuItem key="8">Option 8</MenuItem>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                  <MenuItem key="9">Option 9</MenuItem>
                  <MenuItem key="10">Option 10</MenuItem>
                  <MenuItem key="11">Option 11</MenuItem>
                  <MenuItem key="12">Option 12</MenuItem>
                </SubMenu>
              </Menu>
            </div>
            <br/>
            インラインモードは縦メニューの一種ですが、縦メニューを小さく仕舞えるのが特徴です。<Tooltip title="インラインメニューの実装を見る。"><a href="https://codesandbox.io/s/71n0o1m671" target="_blank"><Icon type="link" /></a></Tooltip>
          </p>
          <p>
            <h2 className="isoGuideHeader">ページネーション
              <a href="https://ant.design/components/pagination/" target="_blank"><Icon type="link" /></a>
            </h2>
            ページ送り用のUIにはPaginationを使用します。<br/>
            実装は現在のページと合計のページを指定するだけです。量が多ければ自動的に間を省略するデザインへと変化します。
            <div className="sampleContainer">
              <Pagination defaultCurrent={1} total={50} />
              <Pagination defaultCurrent={6} total={90} />
              <Pagination defaultCurrent={6} total={91} />
            </div>

            ページ送りの単位を変更する場合は<code>showSizeChanger</code>を使用します。
            <div className="sampleContainer">
              <Pagination showSizeChanger defaultCurrent={1} total={50} />
            </div>

            ページを指定して飛ぶ機能を実装するには<code>showQuickJumper</code>を使用します。
            <div className="sampleContainer">
              <Pagination showQuickJumper defaultCurrent={1} total={50} />
            </div>

            合計を表示するには<code>showTotal</code>を使用します。<br/>
            showTotalに渡す関数の中では合計の値を持つtotalとページングの範囲を持つrangeを使用できます。
            <div className="sampleContainer">
             {/* showTotalは別に定義してある関数です */}
             <Pagination size="small" total={50} showTotal={this.showTotal} />
             <Pagination size="small" total={50} showTotal={(total, range) =>  `${total} items件中${range[0]}-${range[1]}`} />
            </div>

            サイズを小さくする場合は<code>size="small"</code>を指定します。
            <div className="sampleContainer">
              <Pagination size="small" total={50} />
              <Pagination size="small" total={50} showSizeChanger showQuickJumper />
              <Pagination size="small" total={50} showTotal={this.showTotal} />
            </div>


            シンプルなページネーションもあります。
            <div className="sampleContainer">
              <Pagination simple defaultCurrent={2} total={50} />
            </div>

            その他、前後の矢印を文字に変えたりすることができます。
            <Tooltip title="実装を見る。"><a href="https://codesandbox.io/s/1r20q30l" target="_blank"><Icon type="link" /></a></Tooltip>

          </p>
          <p>
            <h2 className="isoGuideHeader">ステップ表示
              <a href="https://ant.design/components/steps/" target="_blank"><Icon type="link" /></a>
            </h2>
            StepsとStepコンポーネントを使用します。<br/>
            Stepsはサイズと現在のプロセス、ステータスを持つことが可能です。
            <br/><br/>
            標準の見た目:
            <div className="sampleContainer">
              <Steps>
                <Step title="入力"></Step>
                <Step title="確認"></Step>
                <Step title="完了"></Step>
              </Steps>
            </div>
            <br/>
            サイズをsmall, 現在のプロセスを1にした場合:
            <div className="sampleContainer">      
              <Steps size="small" current={1}>
                <Step title="入力" />
                <Step title="確認" />
                <Step title="完了" />
              </Steps>
            </div>

            持つことができるステータス　<code>wait</code>,　<code>process</code>,　<code>finished</code>,　<code>error</code>　の例:       
            <div className="sampleContainer">
              <Steps current={2} status="wait">
                <Step title="入力"/>
                <Step title="確認"/>
                <Step title="完了"/>
              </Steps>
              <Steps current={2} status="process">
                <Step title="入力"/>
                <Step title="確認"/>
                <Step title="完了"/>
              </Steps>
              <Steps current={2} status="finished">
                <Step title="入力"/>
                <Step title="確認"/>
                <Step title="完了"/>
              </Steps>
              <Steps current={2} status="error">
                <Step title="入力"/>
                <Step title="確認"/>
                <Step title="完了"/>
              </Steps>
            </div>
            
            Stepsの子要素のStepも個々にステータスの情報を持つことができます。また、アイコンを変更したり各ステップの説明書きを追加することも可能です。<br/>
            持つことができるステータスは<code>wait</code>,<code>process</code>,<code>finished</code>,<code>error</code>の4種類です。
            <div className="sampleContainer">
              <Steps>
                <Step status="finish" title="ログイン" icon={<Icon type="user" />} />
                <Step status="finish" title="認証" icon={<Icon type="solution" />} />
                <Step status="process" title="お支払" icon={<Icon type="loading" />} description="クレジットカードがご利用できます"/>
                <Step status="wait" title="完了" icon={<Icon type="smile-o" />} />
              </Steps>
            </div>
            <br/>
            エラー状態の例：
            <div className="sampleContainer">
              <br/>
              <Steps>
                <Step status="error" title="ログイン" icon={<Icon type="user" />} />
                <Step status="wait" title="認証" icon={<Icon type="solution" />} />
                <Step status="wait" title="お支払" icon={<Icon type="pay-circle-o" description="クレジットカードがご利用できます"/>} />
                <Step status="wait" title="完了" icon={<Icon type="smile-o" />} />
              </Steps>
            </div>


            ボタンと連動して状態を変更するよう実装することができます。
            <Tooltip title="実装を見る。"><a href="https://codesandbox.io/s/71rxl7rp11" target="_blank"><Icon type="link" /></a></Tooltip>
            
            <div className="sampleContainer">
              <Steps size="small" direction="vertical"　current={2}>
                <Step title="入力" />
                <Step title="確認" />
                <Step title="完了" />
              </Steps>
            </div>
            <br/>
            
            StepsのprogressDotプロパティを使えば、アイコンのスタイルを全体的に変更することもできます。<br/>
            <div className="sampleContainer">
              <Steps progressDot current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
              <br/>
              <Steps progressDot={(iconDot, {index, status, title, description}) => `★`	} current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </div>
          </p>
          <p>
            <h2 className="isoGuideHeader">日付選択
              <a href="https://ant.design/components/date-picker/" target="_blank"><Icon type="link" /></a>
            </h2>
              日付、週、月、範囲を選ぶコンポーネントがあり、
              サイズを変更したり
              <a href="https://codesandbox.io/s/k9pnrmn9wv" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>
              
              ・
              非活性にしたり
              <a href="https://codesandbox.io/s/2pm8zrz1np" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>
              
              できます。
              <div className="sampleContainer">
                <div>
                  <Datepicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                  <br />
                  <DateWeekpicker placeholder="週を選択" />
                  <br />
                  <DateMonthpicker placeholder="月を選択" />
                  <br />
                  <DateRangepicker
                  　placeholder={["開始日付を選択", "終了日付を選択"]}
                    defaultValue={[moment('2015/01/01', dateFormat), moment('2016/01/01', dateFormat)]}
                    format={dateFormat}
                  />
                </div>
              </div>

              日付選択はこの他、多様なカスタマイズが可能です。
              <ul class="simpleListContainer">
                <li>
                  選択できない日付を指定する。
                  <a href="https://codesandbox.io/s/2pm8zrz1np" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>
                </li>
                <li>
                  選択されそうな選択肢を用意しておく。（本日・今月など）<a href="https://codesandbox.io/s/8n2v0yq662" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>
                </li>
                <li>
                  日付表示のデザインを変更する。（祝日などの色を変えられそうです）<a href="https://codesandbox.io/s/m33xv6521y" target="_blank"><Tooltip title="実装を見る"><Icon type="link" /></Tooltip></a>
                </li>
              </ul>
          </p>
          <p>
            <h2 className="isoGuideHeader">入力欄
              <a href="https://ant.design/components/input/" target="_blank"><Icon type="link" /></a>
            </h2>
              Inputコンポーネントを使用します。
              <div className="sampleContainer">
                <Input size="small" placeholder="large size" style={{ width: 120 }}/>
                <Input placeholder="default size" style={{ width: 120 }}/>
                <Input size="large" placeholder="small size" style={{ width: 120 }}/>
              </div>

              検索欄を作成する場合はInputSearchコンポーネントを使用します。
              <div className="sampleContainer">
                <div>
                  <InputSearch
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                  />
                </div>

              </div>

              複数行にわたる入力にはTextareaコンポーネントを使用します。
              <div className="sampleContainer">
                <Textarea placeholder="入力値によって自動的にサイズが変わります。" autosize />
                <div style={{ margin: '24px 0' }} />
                <Textarea placeholder="行の数の最小・最大はautosizeプロパティに値を設定できます。" autosize={{ minRows: 2, maxRows: 6 }} />
              </div>

              InputGroupコンポーネントを使用して、複数のコンポーネントを束ねることができます。<br/>
              隙間を開けてレイアウトしたい場合はRow,Colと組み合わせ、ぴったりとくっつけたい場合はInputGroupにcompactを指定します。
              <a href="https://codesandbox.io/s/32vpkrpowm" target="_blank"><Tooltip title="その他のInputGroupのサンプルを見る。"><Icon type="link" /></Tooltip></a>
              <div className="sampleContainer">
                <InputGroup>
                  <Row>
                    <Col span={1}>
                      <Input defaultValue="00" />
                    </Col>
                    <Col span={1}/>
                    <Col span={2}>
                      <Input defaultValue="000" />
                    </Col>
                    <Col span={1}/>
                    <Col span={2}>
                      <Input defaultValue="0000" />
                    </Col>
                  </Row>
                </InputGroup>
                <InputGroup compact>
                  <Input style={{ width: '20%' }} defaultValue="00" />
                  <Input style={{ width: '20%' }} defaultValue="00" />
                  <Input style={{ width: '20%' }} defaultValue="00" />
                </InputGroup>
              </div>

              ツールチップの出てくる入力欄を作ることもできます。
              <a href="https://codesandbox.io/s/r5qw1mlpjn" target="_blank"><Tooltip title="入力チェックを含むサンプルを見る"><Icon type="link" /></Tooltip></a>              
              <div className="sampleContainer">
                <Tooltip
                  trigger={['focus']}
                  title="数字のみ入力してください"
                  placement="topLeft"
                  overlayClassName="numeric-input">
                  <Input
                    placeholder="Input a number"
                    maxLength="25"
                  />
                </Tooltip>
              </div>

              入力欄の前後にはアイコンを表示させることができます。
              <a href="https://codesandbox.io/s/wyjpoq687l" target="_blank"><Tooltip title="サンプルを見る"><Icon type="link" /></Tooltip></a>              
          </p>
          <p>
            <h2 className="isoGuideHeader">フォーム
              <a href="https://ant.design/components/form/" target="_blank"><Icon type="link" /></a>
            </h2>
              Form, FormItemコンポーネントを使用します。<br/>
              FormItemでひとつひとつの入力要素(Input, Checkbox...等々)で囲い、それらをFormで包みます。<br/>
              Formはインライン表示とブロック表示からlayoutを選択できます。FormItemはvalidateStatusに入力チェックの状態、helpプロパティにヒントを持つことができます。下記の例では通常とエラーのみですが、他にも多くの状態を管理することができます。
              <a href="https://codesandbox.io/s/6x16n3rm3n" target="_blank"><Tooltip title="状態管理のサンプルを見る"><Icon type="link" /></Tooltip></a>  
              
              <div className="sampleContainer">
                <Form layout="inline">
                  <FormItem
                      validateStatus="success"                 
                      help="ご登録時のメールアドレス"
                    >
                    <Input placeholder="ユーザ名" style={{ width: 200 }}/>　

                  </FormItem>
                  <FormItem
                    validateStatus="success"                 
                    help="英数字記号8文字以上"
                  >
                  <Input placeholder="パスワード" style={{ width: 200 }}/>

                  </FormItem>
                  <FormItem>
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={false}
                      >
                        Log in
                      </Button>
                  </FormItem>
                </Form>
                <br/>
                <Form>
                  <FormItem
                    validateStatus="error"
                    help="ご登録時のメールアドレス"
                  >
                   <Input placeholder="ユーザ名" style={{ width: 200 }}/>　

                  </FormItem>
                  <FormItem
                    validateStatus="error"
                    help="英数字記号8文字以上"
                  >
                   <Input placeholder="パスワード" style={{ width: 200 }}/>

                  </FormItem>
                  <FormItem>
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={false}
                    >
                      Log in
                    </Button>
                  </FormItem>
                </Form>
              </div>

              入力欄が増えるフォームの作例もあります。
              <a href="https://codesandbox.io/s/04pw0q3pqv" target="_blank"><Tooltip title="サンプルを見る。"><Icon type="link" /></Tooltip></a>  
              
              
          </p>
        </ComponentGuideWrapper>
      </Layout>
    );
  }
}

export default ComponentGuide;
