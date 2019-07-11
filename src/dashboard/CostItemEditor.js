import React, { Component } from 'react'
import { func, number, string } from 'prop-types'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core';
import { incomeCategories } from '../constants/incomCategories';
import { expensesCategories } from '../constants/expensesCategories';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '600px'
    },
};

class CostItemEditor extends Component {
    static propTypes = {
        onSave: func.isRequired,
        text: string,
        value: number,
        category: string,
        type: string
    };

    constructor(props) {
        super(props);
        const { text, value, category, type } = this.props;

        const categories = this.getCategories(type || 'expense');
        const [firstCategory] = categories;

        this.state = {
            text: text || 'Some cost',
            value: value || 0,
            type: type || 'expense',
            category: category || firstCategory
        };
    }

    getCategories(type) {
        return type === 'expense' ? expensesCategories : incomeCategories;
    }
    handleSave = () => {
        const { onSave } = this.props;
        onSave(this.state);
    };
    handleChangeValue = (event) => {
        this.setState({ value: +event.target.value })
    };
    handleChangeText = (event) => {
        this.setState({ text: event.target.value })
    };
    handleChangeCategory = (event) => {
        this.setState({ category: event.target.value })
    };

    render() {
        const { text, value, category, type } = this.state;
        const { classes } = this.props;
        const categories = this.getCategories(type);

        return (
            <div className={classes.root}>

                <TextField
                    label="Name"
                    onChange={this.handleChangeText}
                    value={text}
                />
                <TextField
                    label="Value"
                    onChange={this.handleChangeValue}
                    value={value}
                    type="number"
                />
                <TextField
                    select
                    value={category}
                    onChange={this.handleChangeCategory}
                    label="Category">
                    {categories.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <IconButton aria-label="Delete" onClick={this.handleSave}>
                    <SaveIcon fontSize="small"/>
                </IconButton>
            </div>
        )
    }
}


export default withStyles(styles)(CostItemEditor);
