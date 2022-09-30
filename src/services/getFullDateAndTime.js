const getFullDateAndTime = () => {
    let dateAndTime = new Date();
    let date = dateAndTime.getDate();
    let month = dateAndTime.getMonth() + 1;
    let year = dateAndTime.getFullYear();
    let hours = dateAndTime.getHours();
    let minutes = dateAndTime.getMinutes();
    let seconds = dateAndTime.getSeconds();
    let amOrPm = hours >= 12 ? 'pm' : 'am';
    let fullDate = `${date}/${month}/${year}`;
    let fullTime = `${hours}:${minutes}:${seconds} ${amOrPm}`;
    let fullDateAndTime = `${fullDate} ${fullTime}`;

    return fullDateAndTime;
};

export default getFullDateAndTime;
