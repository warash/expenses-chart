import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CostItemEditor from './CostItemEditor'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/styles';


const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '800px'
    },
    label: {
        fontSize: '13px',
        marginRight: '6px',
        color: 'grey'
    }
};

class CostItem extends Component {

    static propTypes = {
        cost: PropTypes.object.isRequired,
        type: PropTypes.string,
        edit: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired
    };

    state = {
        editing: false
    };

    handleEdit = () => {
        this.setState({ editing: true })
    };

    handleSave = (update) => {
        const { cost, edit } = this.props;
        edit(cost.id, update);
        this.setState({ editing: false })
    };

    handleRemove = () => {
        const { cost, remove } = this.props;
        remove(cost.id);
    };

    renderEditMode() {
        const { cost } = this.props;
        return (<CostItemEditor {...cost}
                                onSave={this.handleSave}/>);
    }

    renderViewMode() {
        const { cost, classes } = this.props;
        return (
            <div className={classes.root}>
                <div><span className={classes.label}>Name: </span><span>{cost.text}</span></div>
                <div><span className={classes.label}>Value:</span><span>{cost.value}</span></div>
                <div><span className={classes.label}>Category:</span><span>{cost.category}</span></div>
                <div>
                    <IconButton aria-label="Edit" onClick={this.handleEdit}>
                        <EditIcon fontSize="small"/>
                    </IconButton>
                    <IconButton aria-label="Delete" onClick={this.handleRemove}>
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>)
    }

    render() {
        const { editing } = this.state;
        return editing ? this.renderEditMode() : this.renderViewMode();
    }
}


export default withStyles(styles)(CostItem);
