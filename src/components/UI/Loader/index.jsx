import classes from './Loader.module.css'

const Loader = () => {
    return (
        <div className={classes.spinner}>
            <div className={classes.loader}>
                <div/>
            </div>
        </div>
    );
};

export default Loader;