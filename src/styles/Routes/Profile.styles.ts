import styled from "styled-components";

export const ProfileContainer = styled.div`
    align-items: left;
    border-radius: 4px;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    height: 30rem;
    width: 100%;

    h1 {
        color: var(--gray-300);
        font-size: 2rem;
        margin-bottom: 0;
    }

    #filterHeader {
        display: flex;
        justify-content: space-between;
    }
    
    #profile {
        align-items: left;
        color: var(--gray-100);
        margin: 1rem 2rem 0 2rem;
    }
    
    #tableFilter {
        align-items: center;
        display: flex;
        margin: 1rem 2rem 0 0;

        button {
            border: 0;
            border-radius: 4px;
            box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
            font-size: 0.8rem;
            justify-content: space-around;
            line-height: 0;
            margin: 0.3rem;

            @media (max-width: 1132) {
                font-size: 2px;
            }
        }
            
        #filterInput {
            align-items: right;
            border: none;
            border-radius: 4px;
            box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
            color: var(--gray-100);
            display: flex;
            margin-top: 0.5rem;
            padding: 1rem;
            padding-right: 0.8rem;
    
            input {
                border: none;
                margin: auto;
                outline: none;
                padding-left: 7px;
            }
        }

        #filter {
            background-color: transparent;
            color: var(--gray-300);
            margin-top: 0.8rem;
            margin-left: 1rem;
            padding: 0.8rem;
        }
        #newProfile {
            background-color: var(--blue-300);
            border: 0;
            border-radius: 4px;
            box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
            color: var(--white);
            font-size: 0.8;
            justify-content: space-around;
            line-height: 0;
            margin-top: 0.75rem;
            margin-left:0.5rem;
            padding: 1.8rem;
        }
    }

    @media {
        h1 {
            font-size: 1.5rem;
        }
    }

    table {
        align: left;
        border-collapse: collapse;
        color: var(--gray-300);
        margin: 2rem;

        th, td {
            padding: 10px;
            text-align: left;
        }
    
        td {
            align-items: center;
            padding-top: 16px;
        }

        td:first-child {
            text-align: center;
            width: 4%;
        }

        td:first-child + td {
            color: var(--blue-500);
            text-align: left;
            width: 30%;
        }

        td:first-child + td + td {
            text-align: left;
            width: 24%;
        }

        td:first-child + td + td + td {
            text-align: left;
            width: 16%;
        }

        td:first-child + td + td + td + td {
            color: var(--blue-500);
            text-align: left;
            width: 20%;

            label {
                vertical-align: 40%;
            }
        }

        td:first-child + td + td + td + td + td {
            text-align: center;
            width: 5%;

            button {
                background: transparent;
                border: 0;
                color: var(--blue-150);
            }
        }
    
        tr {
            border-radius: 2px;
            box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.2);
        }
    
        tr:nth-child(even) {
            background-color: rgba(176, 225, 255, 0.3);
        }
    }

    .done {
        background-color: var(--green);
        border: 0;
        border-radius: 4px;
        color: var(--white);
        font-size: 1rem;
        justify-content: space-around;
        line-height: 0;
        padding: 0 0.5rem;
    }
    
    .undone {
        background-color: var(--red);
        border: 0;
        border-radius: 4px;
        color: var(--white);
        font-size: 1rem;
        justify-content: space-around;
        line-height: 0;
        padding: 0 0.5rem;
    }
`;
