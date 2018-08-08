import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import AppLayout from '../components/AppLayout';
import { Table  } from 'antd';
import indicatorsData from '../models/indicators';

const columns = [{
  title: 'Indicators',
  dataIndex: 'indicator',
  key: 'indicator',
}, {
  title: 'Short Description',
  dataIndex: 'description',
  key: 'description',
}];

const data = indicatorsData.map((item, key) => {
  return Object.assign({}, item, { key });
})

function IndicatorsPage() {
  return (
    <AppLayout>
      <Layout.Header>HCI Domains and Indicators</Layout.Header>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </AppLayout>
  );
}

IndicatorsPage.propTypes = {
};

export default connect()(IndicatorsPage);
