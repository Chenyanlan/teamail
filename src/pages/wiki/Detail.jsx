import React, { Component } from 'react'
import { Anchor, Row, Col } from 'antd';

import styles from './detail.less';

const { Link } = Anchor;


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: { display: 'block' }
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => {
        if (!this.main) {
            return;
        }
        requestAnimationFrame(() => {
            if (!this.main) {
                return;
            }
            const { offsetWidth } = this.main;

            let display = { display: 'block' }
            if (this.main.offsetWidth < 641 && offsetWidth > 400) {
                display = { display: 'none' }
            }

            if (window.innerWidth < 768 && offsetWidth > 400) {
                display = { display: 'none' }
            }

            this.state({
                display,
            });
        });
    }

    render() {
        const { display } = this.state;
        const { data } = this.props;
        return (
            <>
                <Row gutter={24}>
                    <Col xl={18} lg={24} md={24} sm={24} xs={24}
                        style={{
                            marginBottom: 24,
                        }}>
                           {
                               JSON.stringify(data) === "{}"?<>暂无数据</>:(data.list.map(item => {
                                   if (item.detailIfNext === 1) {
                                    return (
                                        <>
                                            <a className={styles.linksmall} key={item.detailIdTitle} id={item.detailTile} name={item.detailTitle}>{item.detailTitle}</a>
                                            <p >{item.detailMsg}</p>
                                        </>
                                    )
                                   }
                                      return (
                                       <>
                                            <a className={styles.linkbig} key={item.detailTitle} id={item.detailTile} name={item.detailTitle}>{item.detailTitle}</a>
                                            <p >{item.detailMsg}</p>
                                        </>
                                   )
                               }))
                           }
                    </Col>
                    <Col xl={6} lg={24} md={24} sm={24} xs={24} style={display}>
                        <Anchor affix className={styles.anchor}>
                            {
                                JSON.stringify(data) === "{}"?<>暂无数据</>:(data.list.map(item => {
                                    return (
                                        <>
                                        <Link key={`${item.detailTitle}-${item.wikiId}`} href={`#${item.detailTitle}`} title={`${item.detailTitle}`} />
                                        </>
                                    )
                                }))
                            }
                        </Anchor>
                    </Col>
                </Row>
            </>
        )
    }
}
export default Detail;
