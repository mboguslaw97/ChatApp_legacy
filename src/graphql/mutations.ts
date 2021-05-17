/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      maxUsers
      messages {
        items {
          chatRoomId
          content
          createdAt
          id
          type
          userId
          updatedAt
          owner
        }
        nextToken
      }
      name
      createdAt
      updatedAt
      owner
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      maxUsers
      messages {
        items {
          chatRoomId
          content
          createdAt
          id
          type
          userId
          updatedAt
          owner
        }
        nextToken
      }
      name
      createdAt
      updatedAt
      owner
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      maxUsers
      messages {
        items {
          chatRoomId
          content
          createdAt
          id
          type
          userId
          updatedAt
          owner
        }
        nextToken
      }
      name
      createdAt
      updatedAt
      owner
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      owner
      user {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      owner
      user {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
      chatRoomId
      id
      isModerator
      userId
      createdAt
      updatedAt
      chatRoom {
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      owner
      user {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
      followee {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
      follower {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
      followee {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
      follower {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      followeeId
      followerId
      id
      createdAt
      updatedAt
      owner
      followee {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
      follower {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      chatRoomId
      content
      createdAt
      id
      type
      userId
      updatedAt
      chatRoom {
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      owner
      user {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      chatRoomId
      content
      createdAt
      id
      type
      userId
      updatedAt
      chatRoom {
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      owner
      user {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      chatRoomId
      content
      createdAt
      id
      type
      userId
      updatedAt
      chatRoom {
        id
        maxUsers
        messages {
          nextToken
        }
        name
        createdAt
        updatedAt
        owner
        chatRoomUsers {
          nextToken
        }
      }
      owner
      user {
        avatar
        bio
        displayName
        followees {
          nextToken
        }
        followers {
          nextToken
        }
        id
        name
        pushToken
        createdAt
        updatedAt
        chatRoomUsers {
          nextToken
        }
        owner
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      avatar
      bio
      displayName
      followees {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      followers {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      id
      name
      pushToken
      createdAt
      updatedAt
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      avatar
      bio
      displayName
      followees {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      followers {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      id
      name
      pushToken
      createdAt
      updatedAt
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      avatar
      bio
      displayName
      followees {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      followers {
        items {
          followeeId
          followerId
          id
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      id
      name
      pushToken
      createdAt
      updatedAt
      chatRoomUsers {
        items {
          chatRoomId
          id
          isModerator
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
