export const isValidGenre = (genre: string): boolean => {
    const validGenres: string[] = ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"];
    const validGenresLen: number = validGenres.length;
    let flag: boolean = false;

    for (let i: number = 0; i < validGenresLen; i++) {
    if (genre === validGenres[i]) {
        flag = true;
        break;
    }
    }

    return flag;
};

export const isValidISBN = (isbn: string): boolean => {
    const regex = /^[1-9][0-9]{12}$/;
    return regex.test(isbn);
};