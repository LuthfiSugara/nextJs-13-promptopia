"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ProfileComp from "@components/profile";

const Profile = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            console.log('data : ', data);
            setMyPosts(data);
        };

        if (session?.user.id) fetchPosts();
    }, [session?.user.id]);

    const handleEdit = (post: any) => {
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post: any) => {
        const hasConfirmed = confirm(
            "Are you sure you want to delete this prompt?"
        );

        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                method: "DELETE",
                });

                const filteredPosts = myPosts.filter((item: any) => item._id !== post._id);

                setMyPosts(filteredPosts);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <ProfileComp
            name='My'
            desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
            data={myPosts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default Profile