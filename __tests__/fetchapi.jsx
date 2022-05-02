import React from "react";
import { render, waitFor } from '@testing-library/react'
import {getServerSideProps} from '@pages/education/index'
import Education from '@pages/education/index'
import '@testing-library/jest-dom'
import axiosMock from 'axios'

describe("EducationPage", () => {
    it("fetch and displays data", async () => {

        const userdata = {
            name: "jim",
            email: "jim@aol.com",
            educations:[
                {
                    schoolname: "Universitas Indonesia",
                    degree: "Degree",
                    major: "IT",
                    startyear: "2018",
                    endyear: "2022",
                    description: "Bachelor Degree",
                }
            ]
            
        }

        axiosMock.get.mockResolvedValueOnce({
            data: userdata
        });

    const context ={
        query: {name: "jim"}
    }

    const url = "http://localhost:3000/api/user/jim";

    const value = getServerSideProps(context)
    const {getByTestId}  = render(<Education datafetch={userdata}/>);

    const resolvedSpan = await waitFor(() => 
        getByTestId("resolved")
    );

    expect(resolvedSpan).toHaveTextContent("jim");
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    // to check the right url called
    // expect(axiosMock.get).toHaveBeenCalledWith(url);
        
    });
});