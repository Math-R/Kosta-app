<template>
,.
    <div class="Home">
        <h1 class="Title">Vos albums</h1>
        <div class="Home__Container">
            <!-- Album component -->
            <div
                class="Album"
                v-for="(album, albumIdx) in albums"
                :key="albumIdx"
                >
                <img class="Album__Cover" :src="album.cover.uri" alt="Cover" />
                <h4 class="Album__Title">{{album.title}}</h4>

                <div class="Album__Preview">
                    <img
                        v-for="(picture, pictureIdx) in album.pictures.slice(0, 4)"
                        :src="picture.uri" alt="Picture"
                        :key="pictureIdx"
                    />
                    <span class="Preview__Counter">{{ album.pictures.length-4 }}</span>
                </div>
            </div>

            <div class="Album__Create">
                <img src="~/assets/images/icons/ic_add.png" alt="Add icon" />
                <span>Ajouter des fichiers</span>
                <span>Maximum de 20 GB</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            albums: [
                {
                    id: 1,
                    title: "Album 1",
                    description: "test",
                    cover: {
                        uri: "https://images.unsplash.com/photo-1616693387651-55cddb4dc5e8"
                    },
                    members: [
                        {
                            profile: "https://images.unsplash.com/photo-1611095560396-89216a352761",
                            firstname: "Thomas",
                            lastname: "Oumar"
                        }
                    ],
                    pictures: [
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Album 2",
                    description: "test",
                    cover: {
                        uri: "https://images.unsplash.com/photo-1616693387651-55cddb4dc5e8"
                    },
                    members: [
                        {
                            profile: "https://images.unsplash.com/photo-1611095560396-89216a352761",
                            firstname: "Thomas",
                            lastname: "Oumar"
                        }
                    ],
                    pictures: [
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Album 2",
                    description: "test",
                    cover: {
                        uri: "https://images.unsplash.com/photo-1616693387651-55cddb4dc5e8"
                    },
                    members: [
                        {
                            profile: "https://images.unsplash.com/photo-1611095560396-89216a352761",
                            firstname: "Thomas",
                            lastname: "Oumar"
                        }
                    ],
                    pictures: [
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Album 2",
                    description: "test",
                    cover: {
                        uri: "https://images.unsplash.com/photo-1616693387651-55cddb4dc5e8"
                    },
                    members: [
                        {
                            profile: "https://images.unsplash.com/photo-1611095560396-89216a352761",
                            firstname: "Thomas",
                            lastname: "Oumar"
                        }
                    ],
                    pictures: [
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Album 2",
                    description: "test",
                    cover: {
                        uri: "https://images.unsplash.com/photo-1616693387651-55cddb4dc5e8"
                    },
                    members: [
                        {
                            profile: "https://images.unsplash.com/photo-1611095560396-89216a352761",
                            firstname: "Thomas",
                            lastname: "Oumar"
                        }
                    ],
                    pictures: [
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616629516640-7a0f809a602c"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616597580072-20892a318f22"
                        },
                        {
                            uri: "https://images.unsplash.com/photo-1616277239882-85da87dd85fb"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style>
    .Home {
        display: flex;
        flex-direction: column;
    }

    .Title {
        width: 80%;
        font-size: 3rem;
        margin: 2rem auto 5rem auto;
    }

    .Home__Container {
        width: 80%;
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }

    .Album,
    .Album__Create {
        cursor: pointer;
        width: 30%;
        height: 15rem;
        overflow: hidden;
        position: relative;
        border-radius: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.16);
        transition: all .2s cubic-bezier(0, 1, 0, 1);
    }


    .Album:hover {
        transform: translateY(-10px)
    }

    .Album__Create {
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border: 3px dotted #707070;
    }
    .Album__Create > img {
        width: 2rem;
    }
    .Album__Cover {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }

    .Album__Title {
        top: 2rem;
        left: 3rem;
        color: white;
        font-size: 2rem;
        position: absolute;
    }

    .Album__Preview {
        left: 1rem;
        right: auto;
        width: 19rem;
        bottom: 1rem;
        display: flex;
        overflow: hidden;
        position: absolute;
        justify-content: space-between;
    }

    .Album__Preview > img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        border-radius: 1rem;
    }

    .Album__Preview > img:last-child {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        border-radius: 1rem;
    }

    .Album__Preview > .Preview__Counter {
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        width: 4rem;
        height: 4rem;
        display: flex;
        color: white;
        font-size: 1.5rem;
        position: absolute;
        border-radius: 1rem;
        align-items: center;
        justify-content: center;
        background-color: rgba(255,0,0,0.45882);
    }
</style>
