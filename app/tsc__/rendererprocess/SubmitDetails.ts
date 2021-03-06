import {SystemInfo} from "../subprocesses/SystemInfo";
const checkcond = () => {

    const cond: any = document.getElementById("termscheck") as HTMLElement;
    const checkCondition: boolean = cond.checked;
    const button: any = document.getElementById("finish") as HTMLElement;
    if ( checkCondition === true ) {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
};

const saveDetails = () => {
    const sd: any = new SystemInfo();
    sd.extractDetails();
};
const finishEle: any = document.getElementById("finish");
finishEle.onclick = () => {
    saveDetails();
}

const check: any = document.getElementById("termscheck");
check.onclick = () => {
    checkcond();
}