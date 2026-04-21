import React from 'react';
import { motion } from "framer-motion";

const Spinner = () => {
    return (
        <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="spinner"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
            />
        </motion.div>
    );
};

export default Spinner;