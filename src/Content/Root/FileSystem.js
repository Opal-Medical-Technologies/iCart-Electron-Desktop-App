import './FileSystem.css'

import { useSelector, useDispatch } from 'react-redux'

import { selectInfo, updateCurrent, addMedication, deleteMedication, updateConstraintsWeightsAll } from '../../Store/MedSlice/MedSlice'

export default function FileSystem() {
    const medInfo = useSelector(selectInfo);
    const dispatch = useDispatch();


    return (
        <div className="SideBar_FileSystem">
            <div className="SideBar_FileSystem_MedicationsHeading">
                <div className="SideBar_FileSystem_HeadingText">
                    Medications
                    </div>
                <div className="SideBar_FileSystem_AddButtonWrapper">
                    <button className="SideBar_FileSystem_AddButton" onClick={() => dispatch(addMedication())}>
                        +
                        </button>
                </div>
            </div>
            <div className="SideBar_FileSystem_FileView">
                {medInfo.medList.map((med, index) => (
                    <div className="SideBar_FileSystem_File" style={{ backgroundColor: (medInfo.currentMedId === index ? "violet" : null) }}>
                        <button className="SideBar_FileSystem_SelectButton" onClick={() => dispatch(updateCurrent(index))}>
                            {med.name}
                        </button>
                        <div className="SideBar_FileSystem_DeleteButtonWrapper">
                            <button className="SideBar_FileSystem_DeleteButton" onClick={() => dispatch(deleteMedication(index))}>
                                x
                                </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}