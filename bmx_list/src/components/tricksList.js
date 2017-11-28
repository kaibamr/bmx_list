import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import SingleTrick from './singleTrick';


class TricksList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({ 
            rowHasChanged: (r1, r2) => r1 !== r2
         });

        this.dataSource = ds.cloneWithRows(this.props.tricks);
    }

    renderRow(trick) {
        return <SingleTrick trick={trick} />;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { tricks: state.tricks };
};

export default connect(mapStateToProps, null)(TricksList);