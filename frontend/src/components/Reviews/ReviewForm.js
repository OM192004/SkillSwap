import React, { useState } from 'react';

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [hoverRating, setHoverRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Rating: ${rating}, Description: ${description}`);
        // You can handle form submission logic here (e.g., sending to a server)
    };

    return (
        
            <div className="max-w-lg  md:w-full bg-white rounded-md ">
                <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
                <form onSubmit={handleSubmit}>

                    {/* Star Rating */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Rating:</label>
                        <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`w-8 h-8 text-2xl ${star <= (hoverRating || rating) ? 'text-purple-600' : 'text-gray-300'}`}
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Review Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Write your review here..."
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-sm hover:text-purple-600 border border-purple-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        
    );
};

export default ReviewForm;
