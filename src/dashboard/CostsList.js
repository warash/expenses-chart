import React from 'react'
import CostItem from './CostItem'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CostItemEditor from './CostItemEditor';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import CostsChart from './CostsChart';

const useStyles = makeStyles(theme => ({
    list: {
        maxWidth: '600px',
        backgroundColor: theme.palette.background.paper,
    },
    root: {
        display: 'flex',
    },
    chart: {
        flexGrow: 1
    },
    newItem:{
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: 'lightgray',
        borderRadius: 5,
        padding: 20,
    }
}));


const CostsList = ({ costs, actions }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <div className={classes.newItem}>
                    <span>Add new item</span>
                    <CostItemEditor onSave={actions.add}/>
                </div>
                <List className={classes.list}>
                    {costs.map(cost =>
                        <React.Fragment key={cost.id}>
                            <ListItem>
                                <CostItem cost={cost} {...actions} />
                            </ListItem>
                            <Divider variant="middle" component="li"/>
                        </React.Fragment>
                    )}
                </List>
            </div>
            <div className={classes.chart}>
                <CostsChart  costs={costs}/>
            </div>
        </div>
    );
};


export default CostsList;
