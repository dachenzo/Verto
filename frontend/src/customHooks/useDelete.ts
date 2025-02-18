import { useState } from "react";
import apiClient from "../services/apiClient";

const useDelete = (url: string, onSuccess: () => Promise<void>) => {
    const [deleteLoading, setdeleteLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const deleteItem = async () => {
        setdeleteLoading(true);
        setError(null);

        try {
            await apiClient.delete(url); // Wait for deletion
            await onSuccess(); // Wait for `onSuccess` to complete
        } catch (err: any) {
            setError(err.message);
            console.log(err.message);
        } finally {
            setdeleteLoading(false);
        }
    };

    return { deleteLoading, error, deleteItem };
};

export default useDelete;
