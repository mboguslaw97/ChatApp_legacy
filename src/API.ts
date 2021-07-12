/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChatRoomInput = {
  id?: string | null,
  isPublic: boolean,
  maxUsers: number,
  name: string,
  tags: Array< string | null >,
};

export type ModelChatRoomConditionInput = {
  isPublic?: ModelBooleanInput | null,
  maxUsers?: ModelIntInput | null,
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  isPublic: boolean,
  maxUsers: number,
  messages?: ModelMessageConnection | null,
  name: string,
  tags: Array< string | null >,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  chatRoomUsers?: ModelChatRoomUserConnection | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  chatRoomId: string,
  content: string,
  createdAt: string,
  id: string,
  type: MessageType,
  userId: string,
  updatedAt: string,
  chatRoom: ChatRoom,
  owner?: string | null,
  user: User,
};

export enum MessageType {
  text = "text",
  image = "image",
}


export type User = {
  __typename: "User",
  avatar: string,
  bio: string,
  displayName: string,
  followees?: ModelContactConnection | null,
  followers?: ModelContactConnection | null,
  id: string,
  name: string,
  pushToken: string,
  createdAt: string,
  updatedAt: string,
  chatRoomUsers?: ModelChatRoomUserConnection | null,
  owner?: string | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items?:  Array<Contact | null > | null,
  nextToken?: string | null,
};

export type Contact = {
  __typename: "Contact",
  followeeId: string,
  followerId: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  followee: User,
  follower: User,
};

export type ModelChatRoomUserConnection = {
  __typename: "ModelChatRoomUserConnection",
  items?:  Array<ChatRoomUser | null > | null,
  nextToken?: string | null,
};

export type ChatRoomUser = {
  __typename: "ChatRoomUser",
  chatRoomId: string,
  id: string,
  isModerator: boolean,
  userId: string,
  createdAt: string,
  updatedAt: string,
  chatRoom: ChatRoom,
  owner?: string | null,
  user: User,
};

export type UpdateChatRoomInput = {
  id: string,
  isPublic?: boolean | null,
  maxUsers?: number | null,
  name?: string | null,
  tags?: Array< string | null > | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateChatRoomUserInput = {
  chatRoomId: string,
  id?: string | null,
  isModerator: boolean,
  userId: string,
};

export type ModelChatRoomUserConditionInput = {
  chatRoomId?: ModelIDInput | null,
  isModerator?: ModelBooleanInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserConditionInput | null > | null,
  or?: Array< ModelChatRoomUserConditionInput | null > | null,
  not?: ModelChatRoomUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateChatRoomUserInput = {
  chatRoomId?: string | null,
  id: string,
  isModerator?: boolean | null,
  userId?: string | null,
};

export type DeleteChatRoomUserInput = {
  id: string,
};

export type CreateContactInput = {
  followeeId: string,
  followerId: string,
  id?: string | null,
};

export type ModelContactConditionInput = {
  followeeId?: ModelIDInput | null,
  followerId?: ModelIDInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
};

export type UpdateContactInput = {
  followeeId?: string | null,
  followerId?: string | null,
  id: string,
};

export type DeleteContactInput = {
  id: string,
};

export type CreateMessageInput = {
  chatRoomId: string,
  content: string,
  createdAt?: string | null,
  id?: string | null,
  type: MessageType,
  userId: string,
};

export type ModelMessageConditionInput = {
  chatRoomId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelMessageTypeInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelMessageTypeInput = {
  eq?: MessageType | null,
  ne?: MessageType | null,
};

export type UpdateMessageInput = {
  chatRoomId?: string | null,
  content?: string | null,
  createdAt?: string | null,
  id: string,
  type?: MessageType | null,
  userId?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateUserInput = {
  avatar: string,
  bio: string,
  displayName: string,
  id?: string | null,
  name: string,
  pushToken: string,
};

export type ModelUserConditionInput = {
  avatar?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  avatar?: string | null,
  bio?: string | null,
  displayName?: string | null,
  id: string,
  name?: string | null,
  pushToken?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelContactFilterInput = {
  followeeId?: ModelIDInput | null,
  followerId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelMessageFilterInput = {
  chatRoomId?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  type?: ModelMessageTypeInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  isPublic?: ModelBooleanInput | null,
  maxUsers?: ModelIntInput | null,
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items?:  Array<ChatRoom | null > | null,
  nextToken?: string | null,
};

export type ModelChatRoomUserFilterInput = {
  chatRoomId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  isModerator?: ModelBooleanInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserFilterInput | null > | null,
  or?: Array< ModelChatRoomUserFilterInput | null > | null,
  not?: ModelChatRoomUserFilterInput | null,
};

export type ModelUserFilterInput = {
  avatar?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isPublic: boolean,
    maxUsers: number,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        chatRoomId: string,
        content: string,
        createdAt: string,
        id: string,
        type: MessageType,
        userId: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    tags: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isPublic: boolean,
    maxUsers: number,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        chatRoomId: string,
        content: string,
        createdAt: string,
        id: string,
        type: MessageType,
        userId: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    tags: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isPublic: boolean,
    maxUsers: number,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        chatRoomId: string,
        content: string,
        createdAt: string,
        id: string,
        type: MessageType,
        userId: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    tags: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateChatRoomUserMutationVariables = {
  input: CreateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type UpdateChatRoomUserMutationVariables = {
  input: UpdateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type DeleteChatRoomUserMutationVariables = {
  input: DeleteChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    chatRoomId: string,
    content: string,
    createdAt: string,
    id: string,
    type: MessageType,
    userId: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    chatRoomId: string,
    content: string,
    createdAt: string,
    id: string,
    type: MessageType,
    userId: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    chatRoomId: string,
    content: string,
    createdAt: string,
    id: string,
    type: MessageType,
    userId: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    avatar: string,
    bio: string,
    displayName: string,
    followees?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    id: string,
    name: string,
    pushToken: string,
    createdAt: string,
    updatedAt: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    avatar: string,
    bio: string,
    displayName: string,
    followees?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    id: string,
    name: string,
    pushToken: string,
    createdAt: string,
    updatedAt: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    avatar: string,
    bio: string,
    displayName: string,
    followees?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    id: string,
    name: string,
    pushToken: string,
    createdAt: string,
    updatedAt: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items?:  Array< {
      __typename: "Contact",
      followeeId: string,
      followerId: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      followee:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      follower:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    chatRoomId: string,
    content: string,
    createdAt: string,
    id: string,
    type: MessageType,
    userId: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      chatRoomId: string,
      content: string,
      createdAt: string,
      id: string,
      type: MessageType,
      userId: string,
      updatedAt: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        isPublic: boolean,
        maxUsers: number,
        name: string,
        tags: Array< string | null >,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      owner?: string | null,
      user:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ContactsByFollowerQueryVariables = {
  followerId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContactsByFollowerQuery = {
  contactsByFollower?:  {
    __typename: "ModelContactConnection",
    items?:  Array< {
      __typename: "Contact",
      followeeId: string,
      followerId: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      followee:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      follower:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ContactsByFolloweeQueryVariables = {
  followeeId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContactsByFolloweeQuery = {
  contactsByFollowee?:  {
    __typename: "ModelContactConnection",
    items?:  Array< {
      __typename: "Contact",
      followeeId: string,
      followerId: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      followee:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      follower:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      chatRoomId: string,
      content: string,
      createdAt: string,
      id: string,
      type: MessageType,
      userId: string,
      updatedAt: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        isPublic: boolean,
        maxUsers: number,
        name: string,
        tags: Array< string | null >,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      owner?: string | null,
      user:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isPublic: boolean,
    maxUsers: number,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        chatRoomId: string,
        content: string,
        createdAt: string,
        id: string,
        type: MessageType,
        userId: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    tags: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserQueryVariables = {
  id: string,
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUserConnection",
    items?:  Array< {
      __typename: "ChatRoomUser",
      chatRoomId: string,
      id: string,
      isModerator: boolean,
      userId: string,
      createdAt: string,
      updatedAt: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        isPublic: boolean,
        maxUsers: number,
        name: string,
        tags: Array< string | null >,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      owner?: string | null,
      user:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomUsersByUserQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomUsersByUserQuery = {
  chatRoomUsersByUser?:  {
    __typename: "ModelChatRoomUserConnection",
    items?:  Array< {
      __typename: "ChatRoomUser",
      chatRoomId: string,
      id: string,
      isModerator: boolean,
      userId: string,
      createdAt: string,
      updatedAt: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        isPublic: boolean,
        maxUsers: number,
        name: string,
        tags: Array< string | null >,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      owner?: string | null,
      user:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomUsersByChatRoomQueryVariables = {
  chatRoomId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomUsersByChatRoomQuery = {
  chatRoomUsersByChatRoom?:  {
    __typename: "ModelChatRoomUserConnection",
    items?:  Array< {
      __typename: "ChatRoomUser",
      chatRoomId: string,
      id: string,
      isModerator: boolean,
      userId: string,
      createdAt: string,
      updatedAt: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        isPublic: boolean,
        maxUsers: number,
        name: string,
        tags: Array< string | null >,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      owner?: string | null,
      user:  {
        __typename: "User",
        avatar: string,
        bio: string,
        displayName: string,
        id: string,
        name: string,
        pushToken: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    avatar: string,
    bio: string,
    displayName: string,
    followees?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    id: string,
    name: string,
    pushToken: string,
    createdAt: string,
    updatedAt: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChatRoomUserByUserIdSubscriptionVariables = {
  userId: string,
};

export type OnCreateChatRoomUserByUserIdSubscription = {
  onCreateChatRoomUserByUserId?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnDeleteChatRoomUserByUserIdSubscriptionVariables = {
  userId: string,
};

export type OnDeleteChatRoomUserByUserIdSubscription = {
  onDeleteChatRoomUserByUserId?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateChatRoomUserByChatRoomIdSubscriptionVariables = {
  chatRoomId: string,
};

export type OnCreateChatRoomUserByChatRoomIdSubscription = {
  onCreateChatRoomUserByChatRoomId?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnDeleteChatRoomUserByChatRoomIdSubscriptionVariables = {
  chatRoomId: string,
};

export type OnDeleteChatRoomUserByChatRoomIdSubscription = {
  onDeleteChatRoomUserByChatRoomId?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateContactByFolloweeIdSubscriptionVariables = {
  followeeId: string,
};

export type OnCreateContactByFolloweeIdSubscription = {
  onCreateContactByFolloweeId?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnDeleteContactByFolloweeIdSubscriptionVariables = {
  followeeId: string,
};

export type OnDeleteContactByFolloweeIdSubscription = {
  onDeleteContactByFolloweeId?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateContactByFollowerIdSubscriptionVariables = {
  followerId: string,
};

export type OnCreateContactByFollowerIdSubscription = {
  onCreateContactByFollowerId?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnDeleteContactByFollowerIdSubscriptionVariables = {
  followerId: string,
};

export type OnDeleteContactByFollowerIdSubscription = {
  onDeleteContactByFollowerId?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateMessageByChatRoomIdSubscriptionVariables = {
  chatRoomId: string,
};

export type OnCreateMessageByChatRoomIdSubscription = {
  onCreateMessageByChatRoomId?:  {
    __typename: "Message",
    chatRoomId: string,
    content: string,
    createdAt: string,
    id: string,
    type: MessageType,
    userId: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    followeeId: string,
    followerId: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    followee:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
    follower:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    chatRoomId: string,
    content: string,
    createdAt: string,
    id: string,
    type: MessageType,
    userId: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    chatRoomId: string,
    content: string,
    createdAt: string,
    id: string,
    type: MessageType,
    userId: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    chatRoomId: string,
    content: string,
    createdAt: string,
    id: string,
    type: MessageType,
    userId: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isPublic: boolean,
    maxUsers: number,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        chatRoomId: string,
        content: string,
        createdAt: string,
        id: string,
        type: MessageType,
        userId: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    tags: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isPublic: boolean,
    maxUsers: number,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        chatRoomId: string,
        content: string,
        createdAt: string,
        id: string,
        type: MessageType,
        userId: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    tags: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    isPublic: boolean,
    maxUsers: number,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        chatRoomId: string,
        content: string,
        createdAt: string,
        id: string,
        type: MessageType,
        userId: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    name: string,
    tags: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    chatRoomId: string,
    id: string,
    isModerator: boolean,
    userId: string,
    createdAt: string,
    updatedAt: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      isPublic: boolean,
      maxUsers: number,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      name: string,
      tags: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
    },
    owner?: string | null,
    user:  {
      __typename: "User",
      avatar: string,
      bio: string,
      displayName: string,
      followees?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      name: string,
      pushToken: string,
      createdAt: string,
      updatedAt: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    },
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    avatar: string,
    bio: string,
    displayName: string,
    followees?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    id: string,
    name: string,
    pushToken: string,
    createdAt: string,
    updatedAt: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    avatar: string,
    bio: string,
    displayName: string,
    followees?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    id: string,
    name: string,
    pushToken: string,
    createdAt: string,
    updatedAt: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    avatar: string,
    bio: string,
    displayName: string,
    followees?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelContactConnection",
      items?:  Array< {
        __typename: "Contact",
        followeeId: string,
        followerId: string,
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    id: string,
    name: string,
    pushToken: string,
    createdAt: string,
    updatedAt: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        chatRoomId: string,
        id: string,
        isModerator: boolean,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};
