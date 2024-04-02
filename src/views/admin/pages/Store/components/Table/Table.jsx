import React, { useEffect, useState } from 'react'
import './Table.css';
import StatusButton from '../../../../components/StatusButton/StatusButton';
import TableSearchBar from '../../../../components/TableSearchBar/TableSearchBar';
import MenuBar from '../../../../components/MenuBar/MenuBar'
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const Table = ({
    array = [],
    label = [],
    keysToDisplay = [],
    filters,
    customBlocks = [],
    extraColumns = [],
    setRecordId,
}) => {
    const [searchedData, setSearchedData] = useState('');
    const navigate = useNavigate('')
    const [noOfRecordsPerPage, setNoOfRecordsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState([]);


    useEffect(() => {
        setRecordsPerPage(array.filter((obj) => {
            return searchedData === '' || obj[filters].toLowerCase().includes(searchedData.toLowerCase());
        }))
    }, [searchedData])

    const handleDeleteStore = (obj) => {

    }
    const handleDeactivation = () => {
    }

    useEffect(() => {
        const startIndex = (currentPage - 1) * noOfRecordsPerPage;
        const endIndex = startIndex + noOfRecordsPerPage;

        setRecordsPerPage(array.slice(startIndex, endIndex));
    }, [array, noOfRecordsPerPage, currentPage]);


    const renderComponent = (index, data) => {
        const temp = data.map((block) => {
            return block.index === index ? block : false;
        }).filter((item) => item !== false)[0];

        return temp || false;
    }


    return (
        <>
            <div className='table_container'>
                <div className="searchBar_box">
                    <TableSearchBar onChange={(e) => setSearchedData(e.target.value)} />
                </div>
                <table className='store_table'>
                    <thead className='table_head'>
                        {label.map((text, index) => {
                            return <th className='table_th'>{text}</th>
                        })
                        }
                    </thead>
                    <tbody>
                        {
                            recordsPerPage.map((obj, mainIndex) => {
                                return (
                                    <tr onClick={() => setRecordId(obj[keysToDisplay[0]])}>
                                        {
                                            keysToDisplay.map((key, index) => {
                                                const blocksList = renderComponent(index, customBlocks);
                                                return (
                                                    <td className='table_data'>
                                                        {
                                                            blocksList ? blocksList.component(obj[key]) : obj[key]
                                                        }
                                                    </td>
                                                )
                                            })
                                        }
                                        {
                                            extraColumns.map((item) => {
                                                return <td className='table_data'>{item(obj)}</td>;
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Pagination
                    noOfRecordsPerPage={noOfRecordsPerPage}
                    setNoOfRecordsPerPage={setNoOfRecordsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    noOfTotalRecords={array.length}
                />
            </div >
        </>
    )
}
export default Table