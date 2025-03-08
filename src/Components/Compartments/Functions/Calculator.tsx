import { useState } from "react";
import { styled } from "styled-components";

const CalculatorWrapper = styled.div`
    max-width: 60%;
    margin: auto;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
`;

const Input = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom:5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3px;
`;


const Button = styled.button`
    display: inline;
    padding: 10px;
    background-color: #89CFFF;
    color: black;
    border-radius: 3px;
    margin: 3px;

    &:hover {
        background-color: rgb(204, 0, 0);
    }
`;

const Result = styled.h3<{ $number: string }>`
    margin-top: 20px;
    padding: 10px;
    background-color: #D3D3D3;
    color: ${(props) => (Number(props.$number) < 0 ? "red" : "black")};
    border-radius: 3px;
`;

export default function Calculator(){
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [result, setResult] = useState<string>("");

    function handleError(message: string) {
        setResult(message);
    }

    function Addition() {
        const input1 = Number(firstNumber);
        const input2 = Number(secondNumber);
        let calculatedResult: 0;
        
        if (isNaN(input1) || isNaN(input2)) {
            handleError("Please enter real numbers!");
        } else {
            calculatedResult = input1 + input2;
            setResult(String(calculatedResult));
        }
    }

    function Subtraction() {
        const input1 = Number(firstNumber);
        const input2 = Number(secondNumber);
        let calculatedResult: 0;
        
        if (isNaN(input1) || isNaN(input2)) {
            handleError("Please enter real numbers!");
        } else {
            calculatedResult = input1 - input2;
            setResult(String(calculatedResult));
        }
    }

    function Multiplication() {
        const input1 = Number(firstNumber);
        const input2 = Number(secondNumber);
        let calculatedResult: 0;
        
        if (isNaN(input1) || isNaN(input2)) {
            handleError("Please enter real numbers!");
        } else {
            calculatedResult = input1 * input2;
            setResult(String(calculatedResult));
        }
    }

    function Division() {
        const input1 = Number(firstNumber);
        const input2 = Number(secondNumber);
        let calculatedResult: 0;
        
        if (isNaN(input1) || isNaN(input2)) {
            handleError("Please enter real numbers!");
        } else if (input2 === 0) {
            handleError("Cannot divide by zero!");
        } else {
            calculatedResult = input1 / input2;
            setResult(String(calculatedResult));
        }
    }

    function Product() {
        const input1 = Number(firstNumber);
        const input2 = Number(secondNumber);
        
        if (isNaN(input1) || isNaN(input2)) {
            handleError('Please enter real numbers!');
        } else {
                let calculatedResult = 1;
                for (let i = 0; i < input2; i++) {
                    calculatedResult *= input1;
                }
                setResult(String(calculatedResult));
        }
    }

    function clearCalc() {
        setFirstNumber("");
        setSecondNumber("");
        setResult("");
    };

    return(
        <CalculatorWrapper>
            <Input
                placeholder="First Number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />
            <Input
                placeholder="Second Number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />
            <ButtonContainer>
                <Button onClick={() => Addition()}>+</Button>
                <Button onClick={() => Subtraction()}>-</Button>
                <Button onClick={() => Multiplication()}>*</Button>
                <Button onClick={() => Division()}>/</Button>
                <Button onClick={() => Product()}>**</Button>
                <Button onClick={clearCalc}>Clear</Button>
            </ButtonContainer>
            <Result $number={result}> {result} </Result>
        </CalculatorWrapper>
    );
    
}