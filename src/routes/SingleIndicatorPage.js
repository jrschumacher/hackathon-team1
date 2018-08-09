import React from 'react';
import { connect } from 'dva';
import { Layout, Table  } from 'antd';
import styles from './styles.css';
import AppLayout from '../components/AppLayout';
import data from '../models/SingleIndicatorTier';
import NavButtons from '../components/NavButtons';

const columns = [{
  title: 'Neighborhood',
  dataIndex: 'neighborhood',
  key: 'neighborhood'
}, {
  title: 'Indicator Value',
  dataIndex: 'value',
  key: 'value',
}, {
  title: 'Rank',
  dataIndex: 'rank',
  key: 'rank',
  className: 'table-rank'
}];

function SingleIndicatorsPage({ match }) {
  const { indicator } = match && match.params;
  const indicatorName = indicator.split('-')
    .map(indicator => indicator.charAt(0).toUpperCase() + indicator.substr(1))
    .join(' ');

  return (
    <AppLayout>

      <NavButtons
        backPath={[ 'indicators' ]}
      />

      <Layout.Header className={styles.subheader}>{indicatorName}</Layout.Header>
      <div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          onRow={(record) => {
            const path = record.neighborhood.toLowerCase().replace(' ', '-');
            return {
              onClick: () => window.location = `/#/neighborhood/${path}`
            };
          }}
        />
      </div>
    </AppLayout>
  );
}

SingleIndicatorsPage.propTypes = {
};

export default connect()(SingleIndicatorsPage);
