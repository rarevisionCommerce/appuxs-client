import { useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { toast } from "react-toastify";

function DownloadDoc() {
    const [isDownloading, setIsDownloading] = useState(false);
	const axios = useAxiosPrivate()
    
    const downloadDocument = async (estimateId, originalFileName) => {
        setIsDownloading(true);
        
        try {
            const response = await axios.get(`/estimates/${estimateId}/download`, {
                responseType: 'blob',
            });

            const blob = new Blob([response.data]);
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = originalFileName || `document-${estimateId}`;
            
            document.body.appendChild(link);
            link.click();
            
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
            toast.success('Downloaded successfully!');
            
        } catch (error) {
            console.error('Download error:', error);
            toast.error('Download failed');
        } finally {
            setIsDownloading(false);
        }
    };
    
    return { downloadDocument, isDownloading };
}
export default DownloadDoc