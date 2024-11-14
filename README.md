Bókun frontend assignment
=========================

Imagine you are setting up a code project for a brand new, super simple Tripadvisor/Bókun experiences site.

Notes
=====

-   The frontend should be written in **React**.
    -   Feel free to choose any React framework or starting point.
-   You don't have to make things look pretty, but we do encourage you to set up some style system/framework.
-   After the project has been finished, you should **share the GitHub repository** with the `bokundev` user on GitHub.

* * * * *

Requirements
============

The app should have the following pages.

Experiences page
----------------

**URL**: `/` or `/experiences`

Should show a list/grid of all experiences added.

Experience details page
-----------------------

**URL**: `/experiences/:experience_id`

Should show details about the experience.

Create e**xperience page**
--------------------------

**URL**: `/experiences/new`

Should show a form that allows you to create a new experience.

**Experience edit page**
------------------------

**URL**: `/experiences/:experience_id/edit`

Should show a form that allows you to update an experience.

* * * * *

API Endpoints available
=======================

The frontend can be built using the following API endpoints.

**List of experiences**
-----------------------

**Method**: `GET`

**URL**: `https://demo.bokun.me/:assignmentId/experiences`

-   Example response body

    ```
    [
      {
        "id": "do9232ylgrkw7mkjztxob6cn",
        "title": "Walking tour",
        "rating": 9.5,
        "imageUrl": "<https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?auto=format&fit=crop&w=1200&q=80>"
      }
    ]

    ```

**Get a single experience**
---------------------------

*Needed to get the product description.*

**Method**: `GET`

**URL**: `https://demo.bokun.me/:assignmentId/experiences/:experienceId`

-   Example response body

    ```
    {
      "id": "do9232ylgrkw7mkjztxob6cn",
      "title": "Walking tour",
      "rating": 9.5,
      "description": "test description",
      "imageUrl": "<https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?auto=format&fit=crop&w=1200&q=80>"
    }

    ```

**Create an experience**
------------------------

**Method**: `POST`

**URL**: `https://demo.bokun.me/:assignmentId/experiences`

-   Example request body

    ```
    {
      "title": "Walking tour",
      "rating": 9.5,
      "description": "test description",
      "imageUrl": "<https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?auto=format&fit=crop&w=1200&q=80>"
    }

    ```

-   Example response body

    ```
    {
      "id": "do9232ylgrkw7mkjztxob6cn",
      "title": "Walking tour",
      "rating": 9.5,
      "description": "test description",
      "imageUrl": "<https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?auto=format&fit=crop&w=1200&q=80>"
    }

    ```

Update **an experience**
------------------------

**Method**: `PUT`

**URL**: `https://demo.bokun.me/:assignmentId/experiences/:experienceId`

-   Example request body

    ```
    {
      "title": "Walking tour",
      "rating": 9.5,
      "description": "test description",
      "imageUrl": "<https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?auto=format&fit=crop&w=1200&q=80>"
    }

    ```

-   Example response body

    ```
    {
      "id": "do9232ylgrkw7mkjztxob6cn",
      "title": "Walking tour",
      "rating": 9.5,
      "description": "test description",
      "imageUrl": "<https://images.unsplash.com/photo-1501621965065-c6e1cf6b53e2?auto=format&fit=crop&w=1200&q=80>"
    }

    ```

Delete **an experience**
------------------------

**Method**: `DELETE`

**URL**: `https://demo.bokun.me/:assignmentId/experiences/:experienceId`
